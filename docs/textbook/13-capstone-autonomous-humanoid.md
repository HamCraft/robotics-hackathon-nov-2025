
---

### **13-capstone-autonomous-humanoid-with-natural-language.md**
```md
# Chapter 13: Capstone – Autonomous Humanoid with Natural Language

## Overview
The final project integrates **all learned topics**: ROS 2, sensors, locomotion, perception, VLA models, and voice commands.

## Diagram: Capstone System Architecture
```mermaid
graph TD
    Sensors --> Perception
    Microphone --> NLPModel
    Perception --> Planner
    NLPModel --> Planner
    Planner --> Actuators
    Actuators --> Environment
    Environment --> Sensors
