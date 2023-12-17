### Example of json files

*vmspec.json*
| Name | datatype | Brief description | Code example |
| ---- |----------| ------------------| -------------|
| slots | int | number of cores |<pre lang=json>"slots": 2</pre>|
| overprovision | int |maximum VM for each core|<pre lang=json>"overprovision": 2</pre>|
| allowSMT | bool ||<pre lang=json>"allowSMT": false</pre>|
| archs | string |architecture of the system|<pre lang=json>"archs": ["X86_64"],</pre>|
| flags | list |processor's instruction set architecture|<pre lang=json>"flags": ["sse2"]</pre>|
| min_frequency | float |minum processor frequency in expressed in GHz|<pre lang=json>"min_frequency": 1.5</pre>|
| ramsize | int Bytes|ram dimension expressed in Bytes|<pre lang=json>"ramsize": 2048</pre>|
| reqECC | bool |request for ecc ram|<pre lang=json>"reqECC": false,</pre>|
| misc | dictionary |OS Infos|<pre lang=json>"misc": {<br>    "os_family": "linux",<br>    "os_flavour": "pop"<br>    }|
| pci | list of dictionary| graphic card specs :<br>- vendor code <br> - model code <br> - quantity <br><br> audio card specs: <br>- vendor code <br> - model code <br> - quantity <br><br> *NB: you can mount a spare audio card but not a spare graphic card, every graphic card has to be mounted along its related audio card*|   <pre lang=json>"pci": [<br>    {<br>        "vendor": "10de", <br>        "model": "24b0", <br>        "quantity": 1 <br>    },<br>    { <br>        "vendor": "10de",<br>        "model": "228b", <br>        "quantity": 1<br>    }<br>]</pre>|