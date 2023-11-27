# Ehy Elemento give me a VM

# Aim of the hackaton

Develop something (script, npm module, python package, docker container, C++ executable) able to call an API and made a request

# Preparation

- [ ] [Create an account on Elemento](https://www.elemento.cloud/forms/sign-in)
- [ ] Get Elemento Daemons 
    - Windows: https://repo.elemento.cloud/app/Elemento_daemons.zip
    - Mac ARM: https://repo.elemento.cloud/app/Elemento_daemons.dmg
    - Docker container (Linux and Mac Intel) https://github.com/Elemento-Modular-Cloud/electros
- [ ] Install ElectrOS 
    - Windows: https://repo.elemento.cloud/app/Elemento_Cloud_App.exe
    - Mac ARM: https://repo.elemento.cloud/app/Elemento_Cloud_App.dmg
    - Mac Intel:https://repo.elemento.cloud/app/Elemento_Cloud_App_intel.dmg
    - Linux.https://repo.elemento.cloud/app/Elemento_Cloud_App.AppImage
- [ ] Install [ElectrOS CLI](https://pypi.org/project/elemento-cli)
- [ ] Launch the daemons and verify that ElectrOS is running properly

# Tracks

## IoT track

Deploy a VM **using Elemento technology** and your **voice**. Deliver a code able to call a REST API as written in the specification. The code should be triggered by voice and managed through Elemento daemons.

- Google
- Alexa
- Cortana
- Siri
- Custom iOS/Android app with voice recognition

## AI track

- train a model to create new mesOS translators
- train a model to create [custom configs](https://github.com/Elemento-Modular-Cloud/electros)

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



## Additional points
- someone in the team wears a *ffa600* T-shirt
- deliver a containarised solution
- post a picture of your team on LinkedIn
- post a picture of your team on Instagram
- post a picture of your team on X
- deliver a solution written in C++
- deliver an AI based solution

# penalties
- crash the WiFi
- deliver a solution written in Flutter
- ask to chatGPT or any LLM
- ask on public forums
- copy code from other teams
- use blockchain in your code


# Prizes
1. Woman in NASA lego set
2. Galileo lego set 
3. Space Shuttle lego set

## Spcial prizes
- Team that uses more data
- Team that uses more compute power
- Team with the most secure solution
- Team with more cables on table
- Team with the more efficient solution


# License
The code developed in this hackaton belongs to Elemento s.r.l. add your name in the license for a correct acknoledgment of your work

# Help
Do you need help? [Open an issue on us](https://github.com/Elemento-Modular-Cloud/helpcenter)
