# Python - Rotating motors of a TNY - 360

The first thing we will try to do is to change the angle of a motor on the TNY - 360. To do this, we will use the `setMotorAngle` method of the `Tny360` class.

!!! note "Verify that the robot is in a safe position"

    Before changing the angle of a motor, make sure that the robot is in a safe position and that there are no obstacles in its path.
    
    It is also recommended to have the robot on a flat surface to avoid any accidents.

## Absolute angle

The `rotateMotorTo` method allows you to set the angle of a specific motor. You need to specify the motor ID and the desired angle in degrees.

```python
motor_id = 1  # Replace with your motor ID
angle = 90  # Replace with your desired angle

success = tny.rotateMotorTo(motor_id, angle)
```

If the command is successful, the `setMotorAngle` method will return `True`. Otherwise, it will return `False`.

```python
if success:
    print(f"Motor {motor_id} set to {angle} degrees")
else:
    print(f"Failed to set motor {motor_id} to {angle} degrees")
```

You can repeat this process for each motor you want to control. Make sure to replace the `motor_id` and `angle` variables with the appropriate values for your application.

## Relative angle

You can also set the angle of a motor relative to its current position using the `rotateMotorBy` method. To do this, you need to specify the motor ID and the desired angle in degrees, like in the absolute angle example.

```python
motor_id = 1  # Replace with your motor ID
angle = 10  # Replace with your desired angle

success = tny.rotateMotorBy(motor_id, angle)
```

As before, if the command is successful, the `setMotorRelativeAngle` method will return `True`. Otherwise, it will return `False`.

```python
if success:
    print(f"Motor {motor_id} set to {angle} degrees relative to its current position")
else:
    print(f"Failed to set motor {motor_id} to {angle} degrees relative to its current position")
```

## Smooth movement

The two methods described above (`rotateMotorTo` and `rotateMotorBy`) allow you to specify an other parameter called `lerping`.
This parameter allows you to specify the duration of the movement in seconds. By default, the movement is done as fast as possible.

```python
motor_id = 1  # Replace with your motor ID
angle = 90  # Replace with your desired angle
lerp_seconds = 2  # Replace with your desired duration in seconds

success = tny.rotateMotorTo(motor_id, angle, lerping=lerp_seconds)
# NOTE: you should check if the movement was successful

success = tny.rotateMotorBy(motor_id, angle, lerping=lerp_seconds)
# NOTE: you should check if the movement was successful
```

<div class="buttons" markdown>

[Connecting to TNY - 360 :material-chevron-left:](connect.md){ .md-button .md-button-left }

</div>