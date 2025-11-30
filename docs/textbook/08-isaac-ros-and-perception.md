
---

### **08-isaac-ros-and-perception.md**
```md
# Chapter 8: Isaac ROS and Perception

## Overview
Isaac ROS integrates **ROS 2 nodes with Isaac Sim**, enabling perception pipelines and sensor processing.

## Diagram: Perception Pipeline
```mermaid
graph TD
    Camera --> ObjectDetection --> ROS2Topics --> RobotController
