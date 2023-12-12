# AI track


## Goal

Train some ML models to help users deal with the configuration of Elemento virtual machines.


## subtracks

You can chose one of the following subtracks

- train a model to create new mesOS translators
- train a model to create [custom configs](https://github.com/Elemento-Modular-Cloud/electros)
- train a model to infer configs from Software specs found on the internet

### Example of a configuration

```json
{
    "slots": 16,
    "overprovision": 4,
    "allowSMT": false,
    "archs": ["X86_64"],
    "flags": ["sse2"],
    "ramsize": 30048,
    "reqECC": false,
    "misc": {"os_family": "windows", "os_flavour": "windows"},
    "pci": [
        {
            "vendor": "10de",
            "model": "2489",
            "quantity": 2
        },
        {
            "vendor": "10de",
            "model": "228b",
            "quantity": 2
        }
    ]
}
```

## Hints

Web scraping is your friend