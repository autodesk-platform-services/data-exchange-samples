# Data Exchange Tutorials and Samples




![Platforms](https://img.shields.io/badge/platform-windows%20%7C%20osx%20%7C%20linux-lightgray.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)


**Forge API:** [![oAuth2](https://img.shields.io/badge/oAuth2-v2-green.svg)](http://developer-autodesk.github.io/) [![Data-Management](https://img.shields.io/badge/Data%20Management-v1-green.svg)](http://developer.autodesk.com/) [![BIM-360](https://img.shields.io/badge/BIM%20360-v1-green.svg)](http://developer.autodesk.com/) [![Webhook](https://img.shields.io/badge/Webhook-v1-green.svg)](http://developer.autodesk.com/) [![Data Exchange](https://img.shields.io/badge/Data%20Exchange-Beta-orange)](http://developer.autodesk.com/)
---

This repository contains a collection of tutorials, workflows and samples illustrating access to exchanges and contained data, using [Forge Data Exchange API](https://stg.forge.autodesk.com/en/docs/fdxs/v1/developers_guide/fd_overview/?sha=forge_fdxs_master_preview). The order is important for a soft introduction to Data Exchange API and its interoperability with other Forge APIs:


1. [Access the exchange container](./1.Access_Exchange_Container) 

   -  use the Data Management API to get the necessary information for retrieving exchange container;
	
	- inspect the metadata of the exchange container, to identify the source model, the source view and the data collection;


2. [Access data using the exchange container](./2.Access_Data)

	- get all assets and relationships using paginated or parallel approach 
	
	- use closure queries to filter for needed results
 
3. [Understand the structure of exchange data](./3.ExploreDataAndRelationships)
	
	- identify different types of assets and relationships, and understand their purpose;
	- understand the concept of snapshot and revision.
   


---

## Prerequisites
1. **Forge Account**: Learn how to create a Forge Account, activate subscription and create an app at [this tutorial](http://learnforge.autodesk.io/#/account/);
	- since the exchange data are located within Autodesk Construction Cloud, a three legged token is required (TODO: which scope?) 
2. [Node.Js](https://nodejs.org) with version > v14.16.0 and basic knowledge of JavaScript;


# License

These samples are licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT). Please see the [LICENSE](LICENSE) file for full details.

# Written by

Denis Grigor [denis.grigor@autodesk.com](denis.grigor@autodesk.com), [Forge Partner Development](http://forge.autodesk.com)
