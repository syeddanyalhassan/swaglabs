# swaglabs

#File Structure 

- To navigate to project structure please go to Desktop->Cypress

Here you will structure like this

![image](https://user-images.githubusercontent.com/34996741/201510237-0c7a95d6-1790-486c-875b-939f0cb63550.png)

Specs are defined under ../integration/testsuites/ where you will find sauceDemo.js file which is a spec file used for adding test suite and test cases

We have package.json file available which contains two scripts that will be used for executing specs along with running allure report.




#For Running test script

Use following command to execute specs as follows: 

npm run ui-regression-allure

This command will execute behind the scene command which is cypress run --spec cypress/integration/testsuites/**.js --env allure=true

![image](https://user-images.githubusercontent.com/34996741/201510650-85c25d09-f8be-4ef0-a3d1-339393f31aa7.png)

![image](https://user-images.githubusercontent.com/34996741/201510658-0ac92883-7e13-48c9-97f7-f0afdb028018.png)

![image](https://user-images.githubusercontent.com/34996741/201510661-9f283924-6690-4454-ab32-34cfe7551af9.png)

![image](https://user-images.githubusercontent.com/34996741/201510676-f4bd98f2-9dda-4013-af98-516ff1398ab8.png)

#For Showing Test Results In Allure Report 

Use the following for generating allure report as follows: 

npm run allure-report 

This command will execute behind the scene command which is allure generate allure-results --clean -o allure-report

![image](https://user-images.githubusercontent.com/34996741/201510765-a14d2880-fdc3-4311-83fa-4cd7c37167f5.png)


After report is generated, proceed with opening the report by using following command

allure open

This command would navigate the user to html view of allure report 

![image](https://user-images.githubusercontent.com/34996741/201510808-bc9268d7-d259-4edb-8e33-9155358bac3f.png)


![image](https://user-images.githubusercontent.com/34996741/201510822-3d2c7d2f-1858-4e62-ac94-6d4a7ea9acfe.png)

![image](https://user-images.githubusercontent.com/34996741/201510859-c7a03600-603f-4764-9ee4-59be4351b6b3.png)

![image](https://user-images.githubusercontent.com/34996741/201510866-81ecc35f-d95c-4169-a33f-298f313e58b0.png)

![image](https://user-images.githubusercontent.com/34996741/201510877-83706b26-42f1-4d6d-af9e-1681ab54c167.png)


# Graphical representation 

You may also check the graphical view of test suite success/failure from allure report by tapping on Graphs side menu list item

![image](https://user-images.githubusercontent.com/34996741/201510933-4ba3027a-7b4a-44d3-a471-c4b645f259cc.png)




# Execute Test
