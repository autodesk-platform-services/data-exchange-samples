# data.exchange.info - Nodejs

![Platforms](https://img.shields.io/badge/platform-windows%20%7C%20osx%20%7C%20linux-lightgray.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)
![Basic](https://img.shields.io/badge/Level-Basic-green.svg)


**APS API:** [![Data Exchange](https://img.shields.io/badge/Data%20Exchange-Beta-orange)](http://developer.autodesk.com/)

![Basic](https://img.shields.io/badge/Level-Basic-green.svg)


## Description

This sample is a CLI app illustrating how, using the `item id` related to an exchange, to get the information on an exchange container, whose data will be further used to get the exchange data.

## Setup

### Prerequisites

1. **APS Account:** Learn how to create a APS Account, activate subscription, and create an app in [this tutorial](http://learnforge.autodesk.io/#/account/).
2. **NodeJs:** [version 8 or newer](https://nodejs.org).

For using this sample, you will need an Autodesk developer credentials. 
Visit the [APS Developer Portal](https://developer.autodesk.com), sign up for an account, 
and [create an app](https://developer.autodesk.com/myapps/create).

**NOTE:** To simplify the sample, since it requires a 3-legged authentication, it was stripped of the authentication part (requiring to open a browser) 
and will just expect a `$TOKEN` env variable to be present before running the sample.
The easiest way of acquiring a 3-legged authentication token is to follow the [3-legged authentication with Postman](https://forge.autodesk.com/blog/3-legged-authentication-postman) blog post.
After the access token is acquired, it can be set as an environment variable as explained below.

### Running locally

Download this project or clone it using [git](https://git-scm.com/). 
It's recommended to install [GitHub desktop](https://desktop.github.com/). 

To run it, install the required packages, set the environment variables with token, and finally start it. 
Via the command line, navigate to the folder where this sample is located and run the command listed below.

Mac OSX/Linux (Terminal):

    npm install
    export TOKEN=<<YOUR TOKEN HERE>>
    npm start <<ID OF THE ITEM>>

Windows (use **Node.js command line** from Start menu):

    npm install
    set TOKEN=<<YOUR TOKEN HERE>>
    npm start <<ID OF THE ITEM>>

The expected output should look like the following:

![](./img/screenshot.png)

### Packages used

This sample is using `axios` for http calls, and `cli-table` for the table-formatted output.

## License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT). Please see the [LICENSE](LICENSE) file for full details.

## Written by

[APS Partner Development](http://forge.autodesk.com)
