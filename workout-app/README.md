# web App for WORKOUT

## Table of contents
- [Overview](#overview)
- [Requirements](#requirements)
- [Using](#Using)
- [Structure](#structure)

## Overview

Multipages application theme included (dark light mode) for WORKOUT based on React 18 with Vite, based on 'react-router-dom'

## Requirements
- [Node] lasted version not earlier 18
- [Pnpm] version 8.3.1
- [React] version 18
- [react-router-dom] version 6.11.1

## Using

'pnpm i' for install modules need install in root in clien and server folder;
'pnpm dev' for start builder from root folder;
'pnpm build' for make dist build from root folder;

## App Structure

```
public                           # → Public container.
└── images                       # → Public images library.
src                              # → Source Application falies.
├── assets                       # → All assets holder
│   ├── Fonts                    # → Icomoon fonts
│   └── styles                   # → Base styles
├── components                   # → Application components
│   ├── Button                   # → Button component 
│   ├── ContactForm              # → ContactForm component 
│   ├── Logo                     # → Logo component
│   ├── Nav                      # → Main navigation contaiber
│   │   ├── NavList              # → Navigation list element
│   │   └── NavItem              # → Navigation list item
│   ├── Header                   # → Page header
│   ├── Hero                     # → Hero section
│   ├── LoginForm                # → LoginForm component
│   ├── Logo                     # → Logo element
│   ├── Section                  # → Main section container
│   │   ├── SectionItem          # → Main section element
│   │   ├── SectionHeading       # → Main section heading row
│   │   ├── SectionTitle         # → Main section title
│   │   └── SectionMoreLink      # → Main section link more
│   ├── Photos                   # → Photos list component
│   ├── Popup                    # → Popup component
│   ├── Post                     # → Post container
│   │   ├── PostDetails          # → Posts Details element
│   │   ├── PostList             # → Posts List element
│   │   └── PostItem             # → Posts List Item
│   ├── Cta                      # → Call to action block
│   └── Footer                   # → Page footer
├── layouts                      # → Aplication layouts 
├── pages                        # → Aplication Pages 
│   ├── About                    # → About page
│   ├── Blog                     # → Blog page
│   ├── Contact                  # → Contact page
│   ├── Home                     # → Index page
│   ├── Login                    # → Login page
│   ├── Post                     # → Post page
│   └── NotFound                 # → 404 page
├── routes                       # → Route Settings
├── App.jsx                      # → Application constructor file
├── main.jsx                     # → Application main file
.eslintrc.cjs                    # → Builder linter settings file
.gitignore                       # → Ignore list for git
index.html                       # → Base structure file
package.json                     # → Builder packages configuration
README.md                        # → Read me
vite.config.js                   # → Builder configuration
```
