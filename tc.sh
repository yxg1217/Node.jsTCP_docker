#!/bin/bash
#--------------------------------------------
# author：Xiaoge Yan
# Traffic Controller TC in Linux Operating System
#--------------------------------------------

#To delete all existing rules
tc qdisc del dev eth0 root

#To list current rules
tc -s qdisc ls dev eth0

#A delay of 200 milliseconds and a packet loss rate of 10%
tc qdisc add dev eth0 root netem latency 200ms loss 10%

#To loss packet
#tc qdisc add dev eth0 root netem loss 20%

#Randomly generate 1% duplicate packets
#tc qdisc add dev eth0 root netem duplicate 1%

#Randomly generate 0.2% corrupted packets
#tc qdisc add dev eth0 root netem corrupt 2%

#25% of the packets will be sent immediately, and the other delays are 10 seconds
#tc qdisc change dev eth0 root netem delay 10ms reorder 25%
