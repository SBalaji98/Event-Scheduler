
# Event Scheduler

Application to schedule events 

---
## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).


## Install

    To install both client and server
    $ npm run installation

## Configure app
  create a file named as default.json
  add a property 
  - "mongURI":"YOUR URI" 
  - "jwtSecret" : "YOUR SECRET"
  
## Running the project

    $ npm run dev
    
   
## Features available 

- User authentication based on jwt
- User registration and access
- calendar view for monhth and day only for authenticated user
- create events by clicking on dates or dragging a range of dates 


### Next Steps
### Features to be added

- the gant chart part is leftout, here I would use  "gantt-for-react" 
- the reason for the selection is the data format required for the interface is very much similar to that of 
  the model I have used in this project

## events alert system using python

- Alerts via email can be given to the user by comparing the system time and the events time
- the python script uses boto3 to access sns service that sends email to respective user emails
- the python script can be made as a cronjob 
