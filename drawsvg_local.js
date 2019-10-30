/**
 * Copyright 2019 Bart Butenaers, Stephen McLaughlin
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
module.exports = function(RED) {
    const fs = require('fs');
    const unzipper = require('unzipper');

    function DrawSvgLocalNode(config) {
        RED.nodes.createNode(this, config);
        
        var node = this;
        
        try {
            var zipFilePath = __dirname + "/lib/edrawsvg_edrawsvg.zip";
            var uncompressedDir = __dirname + "/lib/uncompressed";
            
            // When there is a zip file available (containing DrawSvg), then unzip it to the 'uncompressed' directory.
            // Don't do anything when the 'uncompressed' directory already exists, because then another instance of this node is doing that already...
            if (fs.existsSync(zipFilePath) && !fs.existsSync(uncompressedDir)) {
                node.log("Uncompressing DrawSvg zip file");
                fs.mkdirSync(uncompressedDir);
                
                fs.createReadStream(zipFilePath)
                    .pipe(unzipper.Extract({ path: uncompressedDir }))
                    .on('finish', function() {
                        // Delete the zip file, after it has been unzipped to the 'uncompressed' directory.
                        // This way the zip file is only unzipped if this npm module is being updated
                        fs.unlinkSync(zipFilePath); 
                    });
            }
        } 
        catch(err) {
            node.trace(err);
        }
    }

    RED.nodes.registerType("drawsvg-local", DrawSvgLocalNode);
    
    // Make all the static resources from this node public available (in the flow editor).
    RED.httpAdmin.get('/drawsvg_local/*', function(req, res){
        var options = {
            root: __dirname + "/lib/uncompressed",
            dotfiles: 'deny'
        };
       
        // Send the requested file to the client
        res.sendFile(req.params[0], options);
    });
}
