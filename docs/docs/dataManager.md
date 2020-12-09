# CollabOs data maneger
A document with all the information on how to use the data manager.
## Start an app
Every app should start once the OS is ready, for instance, the data manager will broadcast the ``Start`` message once all the RAM data is restarted, once this message 
is broadcasted the app **should** log in as a process.
## os>process
There is a public list called ``os>process`` wich is used to comunicate with other apps, to be able to participate in this comunication, your app should *log in* as a process.
Adding 4 elements to this list:
```js
1[standart_app]//the name of the app
2[ ]//The first thing you want to comunicate
3[ ]//The response (leave blank) 
4[ ]//The ask slot (leave blank)
```
#### The name of the app
Every app should have his own name, with no [special characters](https://github.com/wamuM/docs/blob/master/Scratch/characters.md) or spaces. It's used to recognize the app among the others.
#### The comunicate slot
The comunicate slot is used to ask things to other process, ``! echo hi`` or ``? text_manager write 0 0 Hi my name is thomas``. Note that on command has a ``! `` and the other a ``? ``,that's
because you can execute your own prompt commands with the ``! `` and ask to an X app with ``? X`` (X being the app name). 
*note: once you are done setting up your request, broadcast the ``comunicate`` message and wait until it's done*
#### The response slot
Once an app has received your task from the comunicate slot it will reply to this slot. *Some apps don't reply, witch throws a ``¤200`` [error code](https://github.com/wamuM/docs/blob/master/Scratch/error_codes.md)*
#### Receive a task
If any app wants to speak with yours they will use the manager as proxy, the manager will then fill your ask slot with the task. 
```js
[standart_app]
[? my_app say hello]
[]
[]
broadcast("comunicate")andWait;
//Your app
[my_app]
[]
[]
[say hello]
```
You should manage the task as you want while using those [error codes](https://github.com/wamuM/docs/blob/master/Scratch/error_codes.md)
And once you are done replacing your ask slot with the response (wich should be ``¤200`` or blank if there is not)
*note: if you leave the ask box empty, the manager will replace the answer with a ``¤200`` error code*
