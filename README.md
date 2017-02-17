# harTack #

A community driven platform to analyze HAR files for vulnerability and slowness
This was the winning entry in the Devweek hackathon for Perfecto's Challange.
Details of challenge: https://github.com/perfectomobile/HAR
PS: This is built with help of the react-starter-kit(https://github.com/kriasoft/react-starter-kit) which helps you avoid writing boiler plate code. 
#### Warning: This project executes user submited code in their browser. It utilizes javascript's eval(). Not ready for production without proper sandboxing


### Quick start ###

* Clone the repo
* Update the Facebook App ID and secrete in `src/config.js` (else you wont be able to login and thus do anything)
* yarn install
* yarn start

### Details
* Instead of analyzing HAR files, we give a platform where users can submit their 'recipes' to analyze a HAR files and flag for issues
* Once we have the recipes, you can browse them on "Browse Recipes"
* You can then submit an HAR file, and we will analyze that file with different Recipes and flag for issues
* Each recipe gets an HAR json object and can return either `{status: true}` or `{status: false, errors:['Some issue found']}`f
* Enjoy

### Contributors ###
* Chakshu https://github.com/chakshuahuja
* Siddhant https://github.com/siddhant3s
* You?

### License ###
* Do whatever you want. If you like the idea, or would like to develop on it, please contact us.
