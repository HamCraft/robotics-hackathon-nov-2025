# Chapter 6: Simulation with Gazebo

## Overview
Gazebo provides a **3D physics-based simulation** for robots. It allows testing code and algorithms safely before deployment.

## Diagram: Simulation Loop
```mermaid
flowchart LR
    ROS2 --> Gazebo
    Gazebo --> Sensors
    Sensors --> ROS2
    ROS2 --> Actuators
