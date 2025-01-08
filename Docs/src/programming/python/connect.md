# Python - Connecting to a TNY - 360

Now that you have installed all the necessary packages, you can start programming your TNY - 360 in Python.

The first step is to connect to the TNY - 360. For this, you need to create a `Tny360` object and call the `connect` method, passing the **IP address** of the TNY - 360 as an argument.

```python
from tny360 import Tny360

tny = Tny360()

IP = "<TNY-360 IP address>"
success = tny.connect(IP)
```

!!! Info "Finding the IP address of your TNY - 360"

    If you don't know the IP address of your TNY - 360, you can find it in the robot's settings by pressing the two buttons on his head.
    
    The IP address is displayed under the **Network** :material-chevron-right: **Wi-Fi** :material-chevron-right: **IP Address** menu.

If the connection is successful, the `connect` method will return `True`. Otherwise, it will return `False`.

```python
if success:
    print("Connected to TNY - 360")
else:
    print("Failed to connect to TNY - 360")
```

Now that you are connected to your TNY - 360, you can start sending commands to it and receiving data from it !

<div class="buttons" markdown>

[Introduction :material-chevron-left:](intro.md){ .md-button .md-button-left }

[Rotating motors :material-chevron-right:](motors.md){ .md-button .md-button-right }

</div>