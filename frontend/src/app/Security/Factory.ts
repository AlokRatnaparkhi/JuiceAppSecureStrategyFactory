import {SQLi,XSS,SecureStrategy } from './SecurityContext'

export interface AbstractFactory
{
    
    getSecureStrategy(strategy:String);


}


export class Factory implements AbstractFactory
{

    getSecureStrategy(strategy : String)
    {

            switch(strategy.toLowerCase())
            {

                    case "sqli": {
                                    return new SQLi();
                                   
                                } 

                    case "xss": {
                                    return new XSS();
                                   
                    } 

                    default: {
                                    console.log('Invalid secure strategy. Please select correct one');
                                    break;
                    } 
            }

    }
   
}