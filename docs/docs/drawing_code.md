# Bracth 
Bracth is a scrath batch processing language used to draw. It's executed with the [bratch compiler](https://scratch.mit.edu/projects/409152297/) and is the first language of the CollabOs project
### Useful information
- The bratch file extension is ``.br``
- The default value of an optional argument is 0. 
- To require a var put a "$" in front of the name( $myvar) 
- Any arg can be changed to a var
- The [#line] args can be changed to a mark. (gc 2,gc :square)
- To create a mark you have to write ":["markName]" in a line.
- The pencil starts in (x:0;y:0)
### Command syntax
- an argument with ``[]`` is obliatory 
- an argument with ``()`` is optional
### Argument types
The type of an argument is specified with the simbole infront:
- ``#``: number
- ``?``: bool (0,1)
- ``%``: hex (000)
- ``"``: text without spaces (my_var)
- ``!``: any value
### Commands:
-  ``e`` : exit
-  ``dp`` : draws a point in the current location.
-  ``gc [#line]`` : goes to code line [#line]
-  ``gp [#x] [#y] (?draw)`` : goes to point [#x] [#y] and if (?draw) draws the way.
-  ``cc [#x] [xy] (?draw)`` : changes x by [#x] and y by [#y] and if (?draw) draws the way.
-  ``l [#line] [#count]`` : goes to code line [#line] resting 1 to [#count] each time if [#count] > 0. So loops [#count] times the command gp [#line]
-  ``m [#step] (?draw)`` : moves [#step] steps and if (?draw) draws the way.
-  ``r [#angle] (?set)`` : changes rotation to [#angle] or sets it if (?set) 
-  ``c [#radius] (#angle)`` : creates an arc with center current location, radius [#radius] and angle (#angle)  
-  ``sc [%hex]`` : sets the pencil color to [%hex]
-  ``cs [#size] (?set)`` : changes the pencil size to [#size] or sets it if (?set)
-  ``v ["name] [!value]`` : creates and/or sets the value of the var ["name]  to [!value];
-  ``o [#value1] * [#value2] ["output]`` : changes the value of the var ["output] to [#value1]*[#value2]
-  ``o [#value1] + [#value2] ["output]`` : changes the value of the var ["output] to [#value1]+[#value2]


### Examples:
#### Square:
```
sc 000;:side;m 100 1;r 90;l :side 4
```
#### Circle:
```
sc 000;:point;m 100 0;dp;r 1;gp 0 0;l :point 360
```
#### Smiley: 
```
v l 100;v a 360;sc 000;:point;m $l 0;dp;r 1;gp 0 0;l :point $a;r 120 1;v l 70;v a 120;l :point 1;v x 50;:eye;m 5 1;r 1;gp $x 25;l :eye 360;v x -50;l :eye 1
```
