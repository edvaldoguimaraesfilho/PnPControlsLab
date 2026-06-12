# PnP SPFx React Controls Lab

A practical, structured learning repository for mastering the **[PnP SPFx React Controls](https://pnp.github.io/sp-dev-fx-controls-react/?utm_source=chatgpt.com)** library in the context of modern **SharePoint Framework (SPFx)** development.

This project was created as a hands-on roadmap to explore the official PnP reusable controls, one Web Part at a time, following a progressive path from beginner to advanced scenarios. The goal is not just to test controls, but to deeply understand how they integrate with SPFx, React, Fluent UI, and Microsoft 365 services.

The repository is organized as a single SPFx solution containing multiple Web Parts (`WP01`, `WP02`, `WP03`...), where each Web Part demonstrates one specific control from the PnP library. Every implementation follows the official documentation and is accompanied by a technical article written in English, designed for publication on GitHub, LinkedIn, and technical blogs.

## Project Goals

* Learn all major controls from the PnP SPFx React Controls library.
* Understand practical use cases for each control.
* Build reusable examples for real-world SharePoint projects.
* Create technical documentation and articles for every control.
* Maintain a structured roadmap for long-term study and portfolio building.

## Tech Stack

* **SharePoint Framework (SPFx)**
* **React**
* **TypeScript**
* **Fluent UI**
* **PnP SPFx React Controls**
* **Heft Build System**
* **Node.js**

## Development Workflow

Every Web Part follows the same workflow:

```powershell
yo @microsoft/sharepoint
npm install @pnp/spfx-controls-react --save
npm install
heft start
```

Each article is stored inside:

```powershell
.\docs\
```

Example:

```powershell
New-Item -Path ".\docs\wp01-accessibleaccordion.md" -ItemType File -Force
```

## Roadmap

This repository follows a structured roadmap of **76 controls**, divided into:

### Standard Controls

Examples include:

* AccessibleAccordion
* Accordion
* AdaptiveCardHost
* AnimatedDialog
* Carousel
* ChartControl
* Dashboard
* DragDropFiles
* DynamicForm
* FilePicker
* PeoplePicker
* TaxonomyPicker
* TreeView
* UploadFiles

### Property Pane Controls

Examples include:

* PropertyFieldCollectionData
* PropertyFieldColorPicker
* PropertyFieldContentPicker
* PropertyFieldDateTimePicker
* PropertyFieldFilePicker
* PropertyFieldPeoplePicker
* PropertyFieldSitePicker
* PropertyFieldTermPicker

Roadmap reference: 

## Current Progress

| Status        | Total |
| ------------- | ----: |
| Completed     |   10+ |
| Remaining     |   60+ |
| Total Planned |    76 |

## Repository Structure

```text
src/
 └── webparts/
      ├── accessibleAccordion/
      ├── accordion/
      ├── adaptiveCardHost/
      ├── animatedDialog/
      ├── carousel/
      ├── chartControl/
      ├── dashboard/
      └── ...
docs/
 ├── wp01-accessibleaccordion.md
 ├── wp02-accordion.md
 ├── wp03-adaptivecardhost.md
 └── ...
```

## Learning Philosophy

This repository is based on **learning by building**.

Instead of reading isolated documentation, each control is:

1. Studied from the official PnP documentation.
2. Implemented inside a working SPFx solution.
3. Tested in SharePoint Workbench.
4. Documented with technical explanations.
5. Published as part of a public portfolio.

This creates both practical expertise and public technical content.

## Official Documentation

Main source used in this project:

[PnP SPFx React Controls Official Docs](https://pnp.github.io/sp-dev-fx-controls-react/?utm_source=chatgpt.com)

## Long-Term Vision

This project is part of a broader SharePoint engineering roadmap focused on:

* Advanced SPFx development
* Reusable enterprise components
* Modern UI patterns
* Microsoft 365 integrations
* SharePoint Online extensibility
* Developer portfolio building

By the end of this lab, the repository will become a complete practical reference for PnP SPFx controls and a solid foundation for enterprise SharePoint solutions.
