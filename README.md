# Ehy Elemento give me a VM

# Aim of the hackaton

Develop something (script, npm module, python package, docker container, C++ executable) able to call an API and made a request

# Preparation

- [ ] [Create an account on Elemento](https://www.elemento.cloud/forms/sign-in)
- [ ] Install ElectrOS [https://www.elemento.cloud/products/electros](https://www.elemento.cloud/products/electros)
- [ ] Install [ElectrOS CLI](https://pypi.org/project/elemento-cli)
- [ ] Launch the daemons and verify that ElectrOS is running properly

# Tracks

## IoT track

Deploy a VM **using Elemento technology** and your **voice**. Deliver a code able to call a REST API as written in the specification. The code should be triggered by voice and managed through Elemento daemons.

- Google
- Alexa
- Cortana
- Siri

## AI track

- train a model to create new mesOS translators
- train a model to create [custom configs](https://github.com/Elemento-Modular-Cloud/electros)
- train a model to infer configs from Software specs found on the internet

## LLM track

- train a llm to create and manage VMs using elemento


## API

here the calls the should be reproduced by your code. `localhost` is the location of the machine running daemons

### Register
#### GET /api/v1.0/client/vm/status
```
GET /api/v1.0/client/vm/status HTTP/1.1
Host: localhost:17777
Accept: application/json
```

#### POST /api/v1.0/client/vm/register
```
POST /api/v1.0/client/vm/register HTTP/1.1
Host: localhost:17777
Accept: application/json

{
  "vm_name": "VM",
  "slots": 2,
  "overprovision": 2,
  "allowSMT": false,
  "archs": ["X86_64"],
  "flags": ["sse2"],
  "ramsize": 2048,
  "reqECC": false,
  "misc": {"os_family": "windows", "os_flavour": "windows10"},
  "pci": [
      {
          "vendor": "10de",
          "model": "24b0",
          "quantity": 1
      },
      {
          "vendor": "10de",
          "model": "228b",
          "quantity": 1
      }
  ],
  "volumes":[],
  "netdevs": []
}
```

#### POST /api/v1.0/client/vm/unregister
```
POST /api/v1.0/client/vm/unregister HTTP/1.1
Host: localhost:17777
Accept: application/json

{
  "local_index": "ffffffff-fffff-ffff-ffff-ffffffffffff"
}
```

# Prizes
1. Woman in NASA lego set
2. Galileo lego set 
3. Space Shuttle lego set

## penalties
- crash the WiFi
- deliver a solution written in Flutter
- ask to chatGPT or any LLM
- ask on public forums
- copy code from other teams
- use blockchain in your code

## Spcial prizes

- Team that uses more data
- Team that uses more compute power
- Team with the most secure solution
- Team with more cables on table
- Team with the more efficient solution
- Team with more yellow accessories
- Team who delivered a solution written in C++
- Team which used less energy during the day
- Team which uses more AI
- Team whose presentation has best analyses


### Scores

https://keepthescore.com/board/gxkysmbpwksle/

Vote https://elemento.typeform.com/to/b98eqeHS?typeform-source=admin.typeform.com


# Deliver
Commmit your code to [Elemento-Modular-Cloud/hackathon2023](https://github.com/Elemento-Modular-Cloud/hackathon2023)

# License
The code developed in this hackaton belongs to Elemento s.r.l. add your name in the license for a correct acknoledgment of your work

# Help
Do you need help? [Open an issue on us](https://github.com/Elemento-Modular-Cloud/helpcenter)
