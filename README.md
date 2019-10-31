# node-red-contrib-drawsvg
A Node-RED node to host a local DrawSvg service.

Special thanks to [Stephen McLaughlin](https://github.com/Steve-Mcl), my partner in crime for the SVG integration in Node-RED !
Most credits for this node go to Joseph Liard, the author of [DrawSvg](#DrawSvg-drawing-editor) for providing us an offline version of his SVG drawing editor!

***!!! DrawSvg is free software. DrawSvg IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED !!!***

## Install
Run the following npm command in your Node-RED user directory (typically ~/.node-red):
```
npm install node-red-contrib-drawsvg
```

## Node usage
We have implemented this node to work close together with our [node-red-contrib-ui-svg](https://github.com/bartbutenaers/node-red-contrib-ui-svg/edit/master/README.md) node:

### Cloud service
The UI SVG node allows users to draw using the [online](http://www.drawsvg.org/drawsvg.html) DrawSvg editor cloud service:

![image](https://user-images.githubusercontent.com/14224149/67963510-03c53980-fbff-11e9-9bb2-6a99d1b57c3d.png)

As soon as the blue button has been clicked, the cloud URL (from the Settings tabsheet) will be accessed.  This will lead the user to the DrawSvg cloud service, which will display the drawing editor inside a popup window.

### Local service

Beside that cloud service, this node-red-contrib-drawsvg node allow you to host your own DrawSvg local service:

![image](https://user-images.githubusercontent.com/14224149/67964272-49cecd00-fc00-11e9-9838-732b0b0a9b2a.png)

As soon as the blue button has been clicked, the local URL (from the Settings tabsheet) will be accessed.  This will lead the user to the DrawSvg local service (hosted by this node-red-contrib-drawsvg node), which will again display the drawing editor inside a popup window.

***Be aware that only a single node-rec-contrib-drawsvg node is required!!!!***

Caution: Be aware that this service uses around **65 Mbyte** of your storage!

## Use cases
