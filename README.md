# PnP Controls Lab

## Overview

PnP Controls Lab is a hands-on SharePoint Framework (SPFx) learning project focused on exploring and implementing the official PnP SPFx React Controls library.

The goal of this repository is to build a large collection of individual SPFx web parts, each demonstrating a specific PnP React Control using the latest SharePoint Framework version.

Every web part includes:

* Complete SPFx implementation
* React and TypeScript source code
* Heft-based development workflow
* Official PnP documentation references
* Practical usage examples
* Community-ready documentation

---

## SharePoint Framework Version

![version](https://img.shields.io/badge/SPFx-1.23.0-green.svg)

---

## Technologies

* SharePoint Framework (SPFx) 1.23.0
* React
* TypeScript
* Fluent UI
* PnP SPFx React Controls
* Heft Build System
* Microsoft 365

---

## Applies To

* SharePoint Online
* Microsoft 365
* SharePoint Framework Solutions

> Get your free developer tenant through the Microsoft 365 Developer Program.

---

## Project Objectives

This laboratory was created to:

* Learn every major control available in the PnP SPFx React Controls library
* Create reusable SharePoint Framework examples
* Provide practical implementation samples
* Build a reference library for SharePoint developers
* Demonstrate modern SPFx development patterns

---

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd pn-p-controls-lab
```

### Install Dependencies

```bash
npm install
```

### Install Heft

```bash
npm install -g @rushstack/heft
```

### Run the Solution

```bash
heft start
```

---

## Build Commands

### Development

```bash
heft start
```

### Production Bundle

```bash
gulp bundle --ship
```

### Package Solution

```bash
gulp package-solution --ship
```

---

## Current Web Parts

| ID   | Control             | Status   |
| ---- | ------------------- | -------- |
| WP01 | AccessibleAccordion | Complete |
| WP02 | Accordion           | Planned  |

Additional controls will be added continuously as part of the learning roadmap.

---

## Repository Structure

```text
src/
 └─ webparts/
     ├─ accessibleAccordion/
     ├─ accordion/
     ├─ ...
```

Each web part demonstrates a single PnP React Control and can be studied independently.

---

## Official Documentation

### SharePoint Framework

* [https://learn.microsoft.com/sharepoint/dev/spfx/](https://learn.microsoft.com/sharepoint/dev/spfx/)

### PnP SPFx React Controls

* [https://pnp.github.io/sp-dev-fx-controls-react/](https://pnp.github.io/sp-dev-fx-controls-react/)

### Fluent UI

* [https://developer.microsoft.com/fluentui](https://developer.microsoft.com/fluentui)

### Heft

* [https://heft.rushstack.io/](https://heft.rushstack.io/)

---

## Contributing

Contributions, suggestions, and improvements are welcome.

If you find issues or have ideas for additional PnP control samples, feel free to submit a pull request or open an issue.

---

## Disclaimer

This project is provided for educational and demonstration purposes.

All code is provided **"AS IS"**, without warranty of any kind, express or implied.

---

## Author

Edvaldo Guimarães

SharePoint Developer | Microsoft 365 | SPFx | Power Platform

Esse texto fica muito mais adequado para um repositório público de laboratório SPFx do que o template padrão gerado pelo PnP.
