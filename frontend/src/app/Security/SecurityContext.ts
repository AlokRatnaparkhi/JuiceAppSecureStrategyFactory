import { Router } from '@angular/router'
export class SecurityContext
{   
    public strategy: SecureStrategy;

    constructor(strategy:SecureStrategy)
    {
        this.strategy=strategy;
    }

    executeSecureStrategy(q:string):boolean
    {
       return  this.strategy.executeSecureStrategy(q);
    }

}


export interface SecureStrategy
{

      executeSecureStrategy(q:string):boolean;



}

export class SQLi implements SecureStrategy
{
    //Input Validation Secure Design Pattern
    executeSecureStrategy(paramvalue:string):boolean
    { 
        let regExp=new RegExp('^[a-z0-9 \s @ . -]+$','i');
        
        return ! regExp.test(paramvalue); //whitelist

     
        
        
         
    }
}

export class XSS implements SecureStrategy
{

    executeSecureStrategy(q:string):boolean
    {   //Plug in your algorithm here
        /*  You can add multiple steps to be executed as a part of secure strategy 
            such as escapeSpecialCharacters(), inputValidation()
            inside this method
        */


       //Input Validation Secure Design Pattern 
       console.log('Inside the strategy..')
       let flag=false;
       let maliciousKeywords= ["script","<",">","%","alert","document","cookie",".","javascript","frame","window"] //Black list example
        console.log("Starting XSS detection engine.....");
        
        maliciousKeywords.forEach(function (value) {
            if(q.toLowerCase().includes(value))
            {   
               flag=true;
            }	

          }); 

          return flag;
    }

}

