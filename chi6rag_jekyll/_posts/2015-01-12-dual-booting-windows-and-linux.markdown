---
layout: post
title:  "Dual booting Windows and Linux"
date:   2015-01-11 09:06:00
categories: Tech
---

When I for the first time wanted to try out Linux, I couldn't at first glance find a simple guide on how to dual-boot Windows and Linux. So I decided to write a quick simple guide for you, to give an overview of how to create your own dual boot system. You should have the following stuff solved before you try this out:

Windows CD
Be sure you have a valid serial for it, and so on
Linux CD
Ubuntu, Fedora, Mint or whatever you might prefer
Check out distrowatch if you have yet to decide
Backup of all your important files
Also configuration files are handy to have
.. and plugins!
When this is solved, you should be ready to get started.

What you do when you want two operation systems, is basically you have a partition for each. Linux requires an additional swap partition, Windows requires only one partition for the entire system. You can even share a partition between both operation systems. However, if you want Windows to be able to read it, you'll need it to be FAT32 (both Windows and Linux handles this filesystem fine!), and you need to create the shared partition, when you install Windows. (I.e. if you have Windows installed now, and would like to have an extra shared drive with Linux, you can't create it when you install Linux, since then Windows won't find it).

You might not know what a partition is, but it's quite simple. Imagine you have your harddisk, and you split it into smaller chunks, and store stuff here. As humans remember, and learn better by illustrations, I made one (bear with me, I'm bad at drawing):


Imagine partition 1 being Windows, partition 2 Linux and partition 3 the shared drive. (I didn't include the swap one here, as it would be pretty small on the scale, but it is a partition like the other ones)

Now, you should decide how your partition scheme should be like. There's tons of options, for this example (to keep it simple) we'll go with this, please check the comments for other ways to do it:

Windows partition (partition we install Windows on) [NTFS]
Linux Partition (partition we install Linux on) [EXT4]
Swap partition (partition we install swap for linux on) [swap]
Shared Partition (partition we want Linux and Windows to share) [FAT]
Alright, let's get to it. For this "guide" I assume we are working on a 500 gb harddrive (plan how you partition your own harddrive). And we want a shared partition between the two systems. This should give a basic knowledge of what you need to do.

Boot from Windows CD
If you happen to not being able to boot from it, go into your BIOS and set CD as first for boot priority
Should you have trouble doing this, google your way around for it. There's plenty of articles on that subject
Create two partitions in Windows partition manager
Partition to install Windows on [100 GB]
Partition we share between Linux and Windows, which we format to Fat32 later [300 GB]
Install Windows on the first partition
Format it with NTFS (not quick, since quick doesn't examine for bad stuff)
Now wait a while for Windows to install
Enter your valid serial when prompted
When your done it should boot
Install your drivers
You'll probably have to restart a few times
Go to "My Computer", and open the D:/ drive (the shared partition)
It'll ask you to format
Do so, and pick FAT32 as the filesystem
Boot up in Windows, and take out the Windows CD
Then put in the Linux CD (Ubuntu, Fedora or whatever distroration you picked)
Restart your computer
Now, there's two kind of installation cd's:
LiveCD: (Fedora has this), it'll boot into the Fedora system. On the desktop there will be a shortcut named something like "Install on your system", click this and you'll get into the installation
Normal: (Ubuntu has this), you'll be greeted by a screen where you can pick install, check disc etc. Pick install.
Now you should be taken through some installation stuff, time, location, etc.
At some point, you'll be at a partition manager.
Ubuntu (Maybe Mint, and other ubuntu based systems too, not sure): You have an option to install the system side by side with the Windows system, do this. Does all the partitioning stuff for you! This will take the rest of the space, ~ 100 GB.
Fedora (And probably any other system): Create a new partition named: "/" (this is the Linux system) [93 GB]. And a "/boot" partition [200 mb] (This is probably for Fedora only, never tried any other system than Ubuntu and Fedora, check your systems installation guide). And then you need the swap one, just pick swap from the dropdown of filesystems. To figure your size, follow this guideline [6 GB for me, as I have 4 GB ram]:
M = Amount of RAM in GB, and S = Amount of swap in GB:
If M < 2
  S = M *2
Else
  S = M + 2
Follow the last configuration
Now, your system restarts and you should see a list of different systems to choose from (remember to take our your CD, so you don't boot the installation CD again), when you boot (i.e. Windows and Linux distroration):
Try to boot Windows
Test shared drive
Restart
Boot Linux
Test shared drive
And everything should be working great! You should be able to access the shared drive on both systems!
I can not take any responsibility for any damage you may cause to your system, while following this guide. It's written only to give a overview of what you need to do, in order to create a dual boot system.