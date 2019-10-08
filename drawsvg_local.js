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

    function DrawSvgLocalNode(config) {
        RED.nodes.createNode(this, config);
        
        var node = this;
        
        node.on("input", function(msg) {   

        });

        node.on("close", function() {
        
        });
    }

    RED.nodes.registerType("drawsvg-local", DrawSvgLocalNode);
    
    // Make all the static resources from this node public available (in the flow editor).
    RED.httpAdmin.get('/drawsvg_local/*', function(req, res){
        var options = {
            root: __dirname /*+ '/static/'*/,
            dotfiles: 'deny'
        };
       
        // Send the requested file to the client
        res.sendFile(req.params[0], options)
    });
}
