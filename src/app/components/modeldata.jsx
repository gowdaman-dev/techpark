import { BiometricModel } from "../models/Biometic";
import { CameraModel } from "../models/Camera";
import { CdDriveModel } from "../models/CdDrive";
import { CpuModel } from "../models/Cpu";
import { DvdModel } from "../models/Dvd";
import { HubModel } from "../models/Hub";
import { KeyBoardModel } from "../models/KeyBoard";
import { LanModel } from "../models/Lan";
import { ModemModel } from "../models/Moden";
import { MonitorModel } from "../models/Monitor";
import { MouseModel } from "../models/Mouse";
import { NewMobileModel } from "../models/NewMobile";
import { OldMobileModel } from "../models/OldMobile";
import { PrinterModel } from "../models/Printer";
import { ProjectorModel } from "../models/Projector";
import { ScannerModel } from "../models/Scanner";
import { TelephoneModel } from "../models/Telephone";

export const ModelData = [
    {
        key: 'cddrive',
        title: 'CD Drive',
        model: <CdDriveModel />,
        content: [
            "To be able to write data on or read data from a CD, you need a component called a CD drive. CD drives are often seen as a part of desktops or laptops, but can also be seen in some cars. There are also external CD drives which can be attached to computers that do not natively possess the component.",
            "CD drives work by placing the CDs in a pre-specified stencil and focussing a 780-nanometer laser onto the disc. This laser beam hits one particular track (groove) of the disc, and as the disc rotates, the CD drive is able to read more of it. The differences in the way the laser beam is reflected off the CD’s surface help the CD drive understand the data on it."
        ]
    },
    {
        key: "printer",
        title: "Printer",
        model: <PrinterModel />,
        content: [
            "A printer is a hardware output device that is used to generate hard copy and print any document. A document can be of any type such as a text file, image, or the combination of both. It accepts input command by users on a computer or on other devices to print the documents. For example, if you have to submit a project report at your college, you need to create a soft copy of your report and print it with the help of the printer,Printers are one of the common computer peripheral devices that can be classified into two categories that are 2D and 3D printers. The 2D printers are used to print text and graphics on a paper, and 3D printers are used to create three dimensional physical objects."
        ]
    },
    {
        key: "monitor",
        title: "Monitor",
        model: <MonitorModel />,
        content: [
            "A monitor is an electronic output device that is also known as a video display terminal (VDT) or a video display unit (VDU). It is used to display images, text, video, and graphics information generated by a connected computer via a computer's video card. Although it is almost like a TV, its resolution is much higher than a TV. The first computer monitor was introduced on 1 March 1973, which was part of the Xerox Alto computer system,Older monitors were built by using a fluorescent screen and Cathode Ray Tube (CRT), which made them heavy and large in size and thus causing them to cover more space on the desk. Nowadays, all monitors are made up by using flat-panel display technology, commonly backlit with LEDs. These modern monitors take less space on the desk as compared to older CRT displays."
        ]
    },
    {
        key: "keyboard",
        title: "Keyboard",
        model: <KeyBoardModel />,
        content: [
            "A keyboard is one of the primary input devices that allows users to input text into a computer or any other electronic machinery. It is a peripheral device that is the most basic way for the user to communicate with a computer. It consists of multiple buttons, which create numbers, symbols, and letters, and special keys like the Windows and Alt key, including performing other functions. The design of the keyboard comes from the typewriter keyboards, and numbers and letters are arranged on the keyboard in that way, which helps to type quickly,The above keyboard design is called QWERTY design because of its first six letters across in the upper-left-hand corner of the keyboard. Although the keyboard design is derived from the typewrites, nowadays, it also includes many other keys as well as Alt/Option, Control, and Windows key can be used as shortcuts to perform the particular operation by combination with other keys. For example, if you press Control + S while working on a document in Microsoft Word, it will save the document you are working on. Furthermore, most of the keyboards have function keys (F1 to F12 or F16) at the top of the keyboard and arranged arrow keys in the downside used to perform numerous functions."
        ]
    },
    {
        key: "scanner",
        title: "Scanner",
        model: <ScannerModel />,
        content: [
            "A scanner is an electrical device that reads and converts documents such as photos and pages of text into a digital signal. This changes the documents in a form that can be viewed and or modified on a computer system by using software applications. There are numerous kinds of scanners available in the market that have different resolutions,Most scanners have a flat scanning surface as they are flatbed devices, which are mainly used for scanning magazines, photographs, and numerous documents. Furthermore, because most flatbed scanners have a cover that lifts up, they can scan books and other heavy things. A sheet-fed scanner is another type of scanner that is only able to accept paper documents. Although sheet-fed scanners have no capability of scanning books, some of their models include a feature of an automatic document feeder (ADF) that allows various pages to be scanned in sequence."
        ]
    },
    {
        key: "modem",
        title: "Modem",
        model: <ModemModel />,
        content: [
            "A modem and router are two of the most frequent components in a home network configuration. A router establishes a local area network (LAN), whereas a modem connects to an internet service provider (ISP). For a home network to work, both devices are necessary,Modem stands for Modulator/Demodulator. The modem is defined as a networking device that is used to connect devices connected in the network to the internet. The main function of a modem is to convert the analog signals that come from telephone wire into a digital form. In digital form, these converted signals are stored in the form of 0s and 1s. The modem can perform both the task of modulation and demodulation simultaneously. Modems are majorly used to transfer digital data in personal systems. The modem is also known as a signal translator as it translates one signal into another signal by modulating the digital signal into an analog signal for transmission and then demodulates receiving analog signals into digital signals."
        ]
    },
    {
        key: "telephone",
        title: "Telephone",
        model: <TelephoneModel />,
        content: [
            "Telephones are used to transmit voice conversations, allowing people to talk to each other when they're not all in the same place. Telephone conversations can be between two people, which is the most common case, or between multiple people at once. The telephone was invented in 1876 by Alexander Graham Bell."
        ]
    },

    {
        key: "dvd",
        title: "DVD player",
        model: <DvdModel />,
        content: [
            "The DVD player decodes the MPEG-2 encoded movie, turning it into a standard composite video signal. The player also decodes the audio stream and sends it to a Dolby decoder, where it is amplified and sent to the speakers. The drive consists of three fundamental components : Drive Motor : It is used to spin the disc."
        ]
    },
    {
        key: "hub",
        title: "Hub",
        model: <HubModel />,
        content: [
            "A hub is a common connection point, also known as a network hub, which is used for connection of devices in a network. It works as a central connection for all the devices that are connected through a hub. The hub has numerous ports. If a packet reaches at one port, it is able to see by all the segments of the network due to a packet is copied to the other ports. A network hub has no routing tables or intelligence (unlike a network switch or router), which is used to send information and broadcast all network data across each and every connection,Although most of the hubs can recognize network troubles or errors like collisions, broadcasting all information to the several ports can be a security risk and cause bottlenecks. The network hubs were popular in the past time as they were cheaper as compared to a switch or router. Nowadays, switches are much cheaper than a hub and provide a better solution for any network. Furthermore, a hub is no IP address, as it is a dumb device."
        ]
    },
    {
        key: "cpu",
        title: "CPU",
        model: <CpuModel />,
        content: [
            "The full form of CPU is Central Processing Unit . It is a brain of the computer. All types of data processing operations and all the important functions of a computer are performed by the CPU. It helps input and output devices to communicate with each other and perform their respective operations. It also stores data which is input, intermediate results in between processing, and instructions,A Central Processing Unit is the most important component of a computer system. A CPU is a hardware that performs data input/output, processing and storage functions for a computer system. A CPU can be installed into a CPU socket. These sockets are generally located on the motherboard. CPU can perform various data processing operations. CPU can store data, instructions, programs, and intermediate results. "
        ]
    },
    {
        key: "barcodescanner",
        title: "Bar Code Scanner",
        model: "",
        content: [
            "A barcode reader or barcode scanner is an optical scanner that can read printed barcodes, decode the data contained in the barcode on a computer. Like a flatbed scanner, it consists of a light source, a lens, and a light sensor for translating optical impulses into electrical signals."
        ]
    },
    {
        key: "mouse",
        title: "Mouse",
        model: <MouseModel />,
        content: [
            "A mouse is a small hardware input device used by hand. It controls the movement of the cursor on the computer screen and allows users to move and select folders, text, files, and icons on a computer. It is an object, which needs to put on a hard-flat surface to use. When the users move the mouse, the cursor moves in the same direction on the display screen. The name mouse is derived from its size as it is a small, corded, and elliptical shape device that looks a bit like a mouse. A connecting wire of a mouse is imaginable to be the mouse's tail. Additionally, some of the mice have combined features like extra buttons, which may be assigned and programmed with many commands. The mouse invention is considered as one of the most important breakthroughs in the computer field as it helps to reduce the use of a keyboard."
        ]
    },
    {
        key: "biomatric",
        title: "Bio Matric",
        model: <BiometricModel />,
        content: [
            "Biometric identifiers are often categorized as physiological characteristics which are related to the shape of the body. Examples include, but are not limited to fingerprint, palm veins, face recognition, DNA, palm print, hand geometry, iris recognition, retina, odor/scent, voice, shape of ears and gait."
        ]
    },
    {
        key: "projector",
        title: "Projector",
        model: <ProjectorModel />,
        content: [
            "A projector is an output device that is capable of connecting to a computer, which may be an other option for a monitor or television in terms of displaying pictures to a large number of people. It takes images generated by a Blu-ray player or a computer and projects them onto a large surface like a wall or white screen. Projectors come in many shapes and sizes and are used in conditions like a classroom, home cinemas, office training or presentation sessions, etc. The projector looks like the below picture."

        ]
    },
    {
        key: "camera",
        title: "Camera",
        model: <CameraModel />,
        content: [
            "camera, in photography, device for recording an image of an object on a light-sensitive surface; it is essentially a light-tight box with an aperture to admit light focused onto a sensitized film or plate."

        ]
    },

    {
        key: "lan",
        title: "LAN",
        model: <LanModel />,
        content: [
            "A LAN comprises cables, access points, switches, routers, and other components that enable devices to connect to internal servers, web servers, and other LANs via wide area networks,The rise of virtualization has also fueled the development of virtual LANs, which enable network administrators to logically group network nodes and partition their networks without a need for major infrastructure changes."

        ]
    },

    {
        key: "oldmobile",
        title: "Mobile",
        model: <OldMobileModel />,
        content: [
            "A mobile phone (or cellphone[a]) is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area, as opposed to a fixed-location phone (landline phone). The radio frequency link establishes a connection to the switching systems of a mobile phone operator, which provides access to the public switched telephone network (PSTN). Modern mobile telephone services use a cellular network architecture, and therefore mobile telephones are called cellphones (or cell phones) in North America. In addition to telephony, digital mobile phones support a variety of other services, such as text messaging, multimedia messaging, email, Internet access (via LTE, 5G NR or Wi-Fi), short-range wireless communications (infrared, Bluetooth), satellite access (navigation, messaging connectivity), business applications, payments (via NFC), multimedia playback and streaming (radio, television), digital photography, and video games. Mobile phones offering only basic capabilities are known as feature phones ; mobile phones that offer greatly advanced computing capabilities are referred to as smartphones."
        ]
    },


    {
        key: "newmobile",
        title: "Smart Phone",
        model: <NewMobileModel />,
        content: [
            "A smartphone is a cellular telephone with an integrated computer and other features not originally associated with telephones, such as an operating system (OS), web browsing and the ability to run software applications. Smartphones are used by consumers and as part of a person's business or work."
        ]
    },





]