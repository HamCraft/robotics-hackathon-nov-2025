
---

### **04-urdf-and-robot-description.md**
```md
# Chapter 4: URDF and Robot Description

## Overview
URDF (Unified Robot Description Format) defines a robot’s **physical structure** for simulation and control.

## Learning Objectives
- Understand URDF XML structure
- Create simple robot models
- Visualize in Gazebo

## Diagram: URDF Hierarchy
```mermaid
graph TD
    Robot --> Base
    Base --> Link1
    Link1 --> Joint1
    Link1 --> Link2
