# logInServer-Express

  Приложение аутентификации с использованием express(). Приложение написано для  
обучения работы с декораторами. Состоит из двух маршрутов - localhost:3000/    
(сообщает-залогинились вы или нет) иlocalhost:3000/auth/login (страница входа).  

--------------------------------------------------------------------------------

Project setup  

npm init -y  
tsc --init  
npm install concurrently nodemoon  
npm install express  
npm install body-session  
npm install coolie-session  
npm install @types/express  
npm install @types/cookie-session  
npm install @types/body-parser  
  
--------------------------------------------------------------------------------

RootController - класс, отвечающий за корневой маршрут. LoginController - класс,   
отвечающий за страницу входа. Реализованы с иоспользование декораторов в   
соответствии с документацией https://www.npmjs.com/package/ts-express-decorators.   

--------------------------------------------------------------------------------
Реализованы следующие декораторы:    

get(string), post(string), put(string), delete(string), patch(string)                             
./controllers/decorators/routes.ts                                  
Принимают на маршрут и записывают его в метаданные path метода.  

use(RequestHandler)    
./controllers/decorators/use.ts   
Принимает middleware функцию и добавляет ее в метаданные middleware.  

bodyValidator(string[])  
./controllers/decorators/bodyValidator.ts  
Принимает клюяи для проверки и записывает их в метаданные validator  

controller(string)   
./controllers/decorators/controller.ts  
Принимает корневой маршрут и обрабатывает все методы в соответствии с записанной    
в метаданыые информацие  


