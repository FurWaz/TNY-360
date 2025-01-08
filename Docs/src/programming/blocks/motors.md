# Blocks - Rotating motors of a TNY - 360

The first thing we will try to do is to change the angle of a motor on the TNY - 360. To do this, you will use the blocks available under the **Motors** category.

!!! note "Verify that the robot is in a safe position"

    Before changing the angle of a motor, make sure that the robot is in a safe position and that there are no obstacles in its path.
    
    It is also recommended to have the robot on a flat surface to avoid any accidents.

## Absolute angle

The `rotateMotorTo` block allows you to set the angle of a specific motor. You need to specify the motor and the desired angle in degrees.

1. Drag and drop the `rotateMotorTo` block into the workspace.
2. Drag and drop a `Motor` block into the `Motor` slot of the `rotateMotorTo` block.
3. Drag and drop a `Number` block into the `Angle` slot of the `rotateMotorTo` block.
4. Enter the desired angle in degrees in the `Number` block.

If the command is successful, the motor will rotate to the specified angle.

If you want to control multiple motors, you can repeat this process for each motor you want to control.

## Relative angle

You can also set the angle of a motor relative to its current position using the `rotateMotorBy` block. To do this, you need to specify the motor and the desired angle in degrees.

1. Drag and drop the `rotateMotorBy` block into the workspace.
2. Drag and drop a `Motor` block into the `Motor` slot of the `rotateMotorBy` block.
3. Drag and drop a `Number` block into the `Angle` slot of the `rotateMotorBy` block.
4. Enter the desired angle in degrees in the `Number` block.

If the command is successful, the motor will rotate by the specified angle relative to its current position.

<div class="buttons" markdown>

[Connecting to TNY - 360 :material-chevron-left:](connect.md){ .md-button .md-button-left }

</div>