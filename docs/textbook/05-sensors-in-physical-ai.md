
---

### **05-sensors-in-physical-ai.md**
```md
# Chapter 5: Sensors in Physical AI

## Overview
Sensors provide **feedback about the environment and robot state**. Common sensors include cameras, LIDAR, IMUs, and force sensors.

## Learning Objectives
- Learn types of sensors and their usage
- Interface sensors with ROS 2
- Process sensor data for perception

## Diagram: Sensor Data Flow
```mermaid
graph LR
    Camera --> ImageProcessing
    LIDAR --> DistanceProcessing
    IMU --> MotionEstimation
    All --> RobotBrain
