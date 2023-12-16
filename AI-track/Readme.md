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

## AtomOS API
### Status

```
GET /api/v1.0/statusjson HTTP/1.1
Host: 0.0.0.0:7777
Accept: application/json
Example response:

HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json

{
   "cpu":
      {
      "SMTOn": true,
      "SMTRatio": 2.0,
      "arch": "X86_64",
      "flags": [],
      "frequency": "3.5000 GHz",
      "max_cores": 320,
      "max_threads": 640,
      "ncores": 32,
      "used_cores": 288,
      "used_threads": 576,
      "vendorID": "AuthenticAMD"
      },
   "manufacturer":"GIGABYTE",
   "mem":
      {
      "avail": 100000,
      "isECC": true,
      "size":  100000
      },
   "pci":
      [
         {
            "avail": 1,
            "max": 1,
            "pciid": ["10de", "1401"]
         }
      ]
}
```

## create

```
POST /api/v1.0/register
Example request:

POST /api/v1.0/register HTTP/1.1
Host: 0.0.0.0:7777
Accept: application/json

{
   "client_uid": "ffffffffffffffffffffffffffffffff",
   "vm_name": "awesome machine",
   "volumes": [
      "vid": "ffffffffffffffffffffffffffffffff"
   ],
   "req": {
      "slots": 2,
      "overprovision": 2,
      "allowSMT": true,
      "arch": ["X86_64"],
      "flags": ["sse2"],
      "ramsize": 10000,
      "reqECC": true,
      "volumes": [ ],
      "pcidevs": [],
      "netdevs": [],
      "os_family": "windows",
      "os_flavour": "windows11",
      "vm_name": "11",
      "creation_date": "%m/%d/%Y, %H:%M:%S",
   }
}
Example response:

HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json

{
 'registered': True,
 'uniqueID': ffffffffffffffffffffffffffffffff,
 'req_json':
   {
      "slots": 2,
      "overprovision": 2,
      "allowSMT": true,
      "arch": ["X86_64"],
      "flags": ["sse2"],
      "ramsize": 10000,
      "reqECC": true,
      "volumes": [ ],
      "pcidevs": [],
      "netdevs": [],
      "os_family": "windows",
      "os_flavour": "windows11",
      "vm_name": "11",
      "creation_date": "%m/%d/%Y, %H:%M:%S",
      "network_config":
          {
             "ipv4": "0.0.0.0"
          }
   },
 'xml': ""
}
Response Headers:
Content-Type – application-json

Status Codes:
200 OK – Pledge can be allocated

204 No Content – Pledge cannot be allocated
```

## destroy 
```
DELETE /api/v1.0/unregister
Example request:

DELETE /api/v1.0/unregister HTTP/1.1
Host: 0.0.0.0:7777
Accept: application/json

{
   "client_uid": "ffffffffffffffffffffffffffffffff",
   "vm_uid": "ffffffffffffffffffffffffffffffff"
}
Example response:

HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json

{
   'unregistered': True,
   'uniqueID': "ffffffffffffffffffffffffffffffff"
}
Response Headers:
Content-Type – application-json

Status Codes:
200 OK – deletion successful

204 No Content – deletion failed
```