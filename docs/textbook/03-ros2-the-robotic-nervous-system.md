
---

### **03-ros2-the-robotic-nervous-system.md**
```md
# Chapter 3: ROS 2 – The Robotic Nervous System

## Overview
ROS 2 is the **middleware** enabling robots to communicate, sense, and act. Think of it as the robot’s **nervous system**.

## Learning Objectives
- Understand **nodes, topics, and messages**
- Implement basic **publisher/subscriber patterns**
- Explore **real-time robotics communication**

## Diagram: ROS 2 Architecture
```mermaid
graph TD
    NodeA[Publisher Node] --> TopicA[Topic]
    NodeB[Subscriber Node] --> TopicA
    NodeC[Service Node] --> NodeA
