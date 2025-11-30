
---

### **10-vision-language-action-models.md**
```md
# Chapter 10: Vision-Language-Action Models

## Overview
VLA models allow robots to **perceive the environment, understand instructions, and act accordingly**.

## Diagram: VLA Pipeline
```mermaid
graph TD
    Vision --> PerceptionModel --> ActionPlanner
    Language --> NLPModel --> ActionPlanner
    ActionPlanner --> RobotActuators
