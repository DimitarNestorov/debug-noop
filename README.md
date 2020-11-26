# debug-noop

Replace `debug` with this to increase performance.

# Yarn

In `package.json` add:

```json
    "resolutions": {
      "**/debug": "npm:debug-noop@*"
    }
```
