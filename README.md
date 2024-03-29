# node-red-contrib-drawsvg
A Node-RED node to host a local DrawSvg service.

Special thanks to [Stephen McLaughlin](https://github.com/Steve-Mcl), my partner in crime for the SVG integration in Node-RED !
Most credits for this node go to Joseph Liard, the author of [DrawSvg](#DrawSvg-drawing-editor) for providing us an offline version of his SVG drawing editor!

***!!! DrawSvg is free software !!!***
***!!! DrawSvg IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED !!!***

## Update: DrawSvg 9.5 is only partly free
Some users reported that starting from DrawSvg version 9.5, there are now two separate profiles:
+ The ***basic*** profile is still free, but is a limited version.
+ The ***expert*** profile requires (after a trial period) a subscription via [patreon](https://www.patreon.com/drawsvg) at 4 euros per month.

Unfortunately it seems that some existing options (e.g. "layers") are now only available in the expert profile.  So if you need those, you will need to subscribe at patreon.  Or you can install an old version of this node (from within your .node-red folder) like this:
```
npm install node-red-contrib-drawsvg@1.2.0
```
However note that this way you will be forced to keep using the old DrawSvg 8.0 version ;-( 

## Install
Run the following npm command in your Node-RED user directory (typically ~/.node-red):
```
npm install node-red-contrib-drawsvg
```

## Support my Node-RED developments
Please buy my wife a coffee to keep her happy, while I am busy developing Node-RED stuff for you ...

<a href="https://www.buymeacoffee.com/bartbutenaers" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy my wife a coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## Node usage
We have implemented this node to work close together with our [node-red-contrib-ui-svg](https://github.com/bartbutenaers/node-red-contrib-ui-svg/edit/master/README.md) node:

### Online cloud service
The UI SVG node allows users to draw using the [online](http://www.drawsvg.org/drawsvg.html) DrawSvg editor cloud service:

![image](https://user-images.githubusercontent.com/14224149/67963510-03c53980-fbff-11e9-9bb2-6a99d1b57c3d.png)

As soon as the blue button has been clicked, the cloud URL (from the Settings tabsheet) will be accessed.  This will lead the user to the DrawSvg cloud service, which will display the drawing editor inside a popup window.

### Offline local service

Beside that cloud service, this node-red-contrib-drawsvg node allow you to host your own DrawSvg local service:

![image](https://user-images.githubusercontent.com/14224149/67964272-49cecd00-fc00-11e9-9838-732b0b0a9b2a.png)

As soon as the blue button has been clicked, the local URL (from the Settings tabsheet) will be accessed.  This will lead the user to the DrawSvg local service (hosted by this node-red-contrib-drawsvg node), which will again display the drawing editor inside a popup window.

When your Node-RED flow editor is available e.g. at *http://yourmachine:1880/*, then the local DrawSvg service will be available at *http://yourmachine:1880/drawsvg_local/edrawsvg.html*.
 
***Be aware that only a single node-red-contrib-drawsvg node is required!!!!***

Caution: Be aware that this service uses around **65 Mbyte** of your storage!

## Use cases
For most users the online DrawSvg cloud service will be sufficient, but in some cases an local service will be needed:
+ For offline Node-RED installations, that have no internet connection.
+ To avoid ***mixed content*** errors, thrown by modern browsers that don't allow unsecure *http* content inside secure *https* sessions:
   + There is no error when a http URL is used for the Node-RED flow editor, and a http (or https) is used for DrawSvg:
   
      ![image](https://user-images.githubusercontent.com/14224149/67990436-30487800-fc36-11e9-80d4-bc137c0194cc.png)
   
      Although the https URL for DrawSvg might result in other problems: since the DrawSvg cloud service uses a self-signed certificate, you might have to accept that certificate somehow in your favorite browser.

   + There will be an error when a https URL is used for the Node-RED flow editor, and a http is used for DrawSvg:
   
      ![image](https://user-images.githubusercontent.com/14224149/67990638-d1cfc980-fc36-11e9-8c70-363f25c9ae8a.png)
   
      Summarized: In this case, you are only allowed now to use https for DrawSvg ...
   
   + By using a local service, the DrawSvg content will be downloaded *inside* the existing Node-RED http(s) connection.  As a result there shouldn't appear any mixed content errors.
   
      ![image](https://user-images.githubusercontent.com/14224149/67990805-43a81300-fc37-11e9-9011-8164adf2bab7.png)

## Versions
See the DrawSvg [release notes](https://www.drawsvg.org/home/release-notes.html) to see the new features in every release.

+ Version 1.1.0 offers DrawSvg version 7.6
+ Version 1.2.0 offers DrawSvg version 8.0
+ Version 1.3.0 offers DrawSvg version 9.5
