---
type: slide
slideOptions:
  spotlight:
    enabled: true
---

<!-- .slide: data-background="#FFA600" -->

# Welcome to Elemento HQ

---

<!-- .slide: data-background="#FFA600" -->


# Important stuff

- 🛜 Wifi **Elemento HQ Guests** *10agosto2021!*
- 🔌 Any **small white** switch is for you
- 🍔 Food, tea and coofee
- 🚾 Toilets

---

<!-- .slide: data-background="#FFA600" -->


# Preparation

- [ ] [Create an account on Elemento](https://www.elemento.cloud/forms/sign-in)
- [ ] Get Elemento Daemons 
- [ ] Install ElectrOS 
- [ ] Install [ElectrOS CLI](https://pypi.org/project/elemento-cli)
- [ ] Launch the daemons and verify that ElectrOS is running properly

---

<!-- .slide: data-background="#FFA600" -->

# Tracks

- Internet of Things [4 goals]
- Machine Learning [3 goals]
- Large Language Models [1 goal]

---

<!-- .slide: data-background="#FFA600" -->

# Rules

- Your team needs to complete at least 1 goal to win a **Lego** set.

---

<!-- .slide: data-background="#FFA600" -->

# Resources

send `fvalle@elemento.cloud` a **ssh *public* key** and you will have access to a **V100 GPU**

---

# Track 1

Deploy a VM **using Elemento technology** and your **voice**.

----

## Goal(s) of the track

Develop a tool able to create and destroy VMs using users' voice. Deliver a code able to call our REST API as written in the specifications. The code should be triggered by a voice assistant and managed through Elemento daemons.

You can choose one of the following assistants:

- Google
- Alexa
- Cortana
- Siri

----

## hint

Look at [homebridge](https://homebridge.io) and its plugins

---

# Track 2

Train some ML models to help users deal with the configuration of **Elemento virtual machines**.

----

## Goal(s) of the track

- train a model to create new **MesOS translators**
- train a model to create [custom vm configurations](https://github.com/Elemento-Modular-Cloud/electros)
- train a model to infer configurations from Software specifics found on the internet

----

### Example of Elemento config file


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


----

### MesOS translator
* **input**: Elemento REST API specification and CSP API specification

* **output**: Code to translate one into the other


----

### Create custom VM configuration

* **input**: verbose specification of requirements

* **output**: Elemento-like spec file

----

### Create VM configuration from software name

* **input**: name of software (i.e. Autocad, Ansys, Crysis)

* **output**: Elemento-like spec file

----

## Hints

*scraping* is your friend

---

# Track 3

Train any Large Language Model to interact with Elemento API.
*GPT can you create a VM for me?*

----

## Rules

train a llm to create and manage VMs using elemento

----

## Hints

*Huggingfaces*🤗 is your friend

---

<!-- .slide: data-background="#FFA600" -->

## Winner

At the end of the day  every team **presents** its work in a 5' presentation on **TV**!
 

----

<!-- .slide: data-background="#FFA600" -->


# Prizes

1. Woman in NASA lego set
2. Galileo lego set 
3. Space Shuttle lego set

----

<!-- .slide: data-background="#FFA600" -->


## Spcial prizes

- Team uses interesting datasets [**2TB ssd**]
- Team that uses a lot of compute power [**Jetson nano**]
- Team with a very secure solution [**Yubico key**]
- Team with more cables on table [**Arduino**]
- Team with a very efficient solution [**RISC-V board**]
- Team with more yellow accessories [**power bank**]
- Team who delivered a solution written in C++[**screwdrivers kit**]
- Team which use few energy during the day [**Raspberrypi**]
- Team which uses AI in original ways [**Google coral**]
- Team whose presentation has cool analyses [**Power meter**]



----

<!-- .slide: data-background="#FFA600" -->


## penalties\*

- crash the WiFi
- deliver a solution written in *Flutter*
- *chatGPT* wrote more than 49% of the code
- ask on public forums
- copy code from other teams
- your code mines *bitcoin* in background
- any unfair behaviour

\* -1 point

---

<!-- .slide: data-background="#FFA600" -->


# How to deliver

PR your code to [Elemento-Modular-Cloud/hackathon2023](https://github.com/Elemento-Modular-Cloud/hackathon2023)


---

<!-- .slide: data-background="#FFA600" -->

# License

Add your name and email in the license for a correct acknoledgment of your work

---

<!-- .slide: data-background="#FFA600" -->

# help

Do you need help? [Open an issue on https://github.com/Elemento-Modular-Cloud/helpcenter ](https://github.com/Elemento-Modular-Cloud/helpcenter)

\* or raise your hand


---

<!-- .slide: data-background="#FFA600" -->


# Timesheet

## 1000

Welcome, setup and start coding!

## 1300

Lunch

## 1700

Presentations of teams' work

## 1800

Winner announcement and awardings

---

<!-- .slide: data-background="#FFA601" -->


# Let's Code!

---

# Let's vote!

![Hackaton votes](https://hackmd.io/_uploads/H13J9J8Ip.png)



---

https://keepthescore.com/board/bwmqpgzpwktxr/

---