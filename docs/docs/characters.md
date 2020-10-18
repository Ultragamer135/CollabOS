# Special characters for the CollabOS
*you shouldn't use this characters for anything else that what they are ment or something could break*</br>
*all the examples are from CollabOs projects*
### ``◘`` Meta data separator
In a formated text separates the meta data from the text:
```
◘color:20◘Hey how are you◘size:23:color:yellow◘
```
### ``─``Instance separator
Separates the different instances in a list (only used for instances that use a variable number of elements)
```
[secret prompt]
1 ─#standart_app
2 lol
3 ──#standart_app
4 ─prompt
5 File created
5 ──prompt
```
### ``¶`` Line break 
It represents the end of a line
```
My name is:¶wamu_M
```
### ``¤`` Error code
it's followed by 3 numbers that represent an error (check the [error codes documentation](https://github.com/wamuM/docs/blob/master/Scratch/error_codes.md))
```
! exit
¤103
```
