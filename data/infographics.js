/* jshint indent: 2, node: true */

module.exports = function(i18n) {
  function _(key) {
    return i18n.gettext(key);
  }

  return {
    "available": {
      "header": "NEEDS CONTENT PLEASE",
      "subheader": "NEEDS CONTENT PLEASE",
      "source": {
        "name": "Freedom House",
        "src": "http://test.com"
      },
      "dataPoints": {
        "countryData": {
          "shading": {
            "name": "internetPopPercentage",
            "invert": false,
            "values": [
              20.0,
              40.0,
              60.0,
              80.0,
              100.0
            ],
            "legend": [
              "Less than 20%",
              "20-40%",
              "40-60%",
              "60-80%",
              "Greater than 80%"
            ]
          },
          "display": {
            "name": "internetPopPercentage",
            "units": "%"
          }
        }
      }
    },
    "affordable": {
      "header": "NEEDS CONTENT",
      "subheader": "NEEDS CONTENT",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "countryData": {
          "shading": {
            "name": "salaryPercentage",
            "invert": true,
            "values": [
              50.0,
              70.0,
              100.0,
              99999999.0
            ],
            "legend": [
              "Less than 50%",
              "50-70%",
              "70-100%",
              "Greater than 100%"
            ]
          },
          "display": {
            "name": "hoursOfWork",
            "units": ""
          }
        }
      }
    },
    "localization": {
      "header": "Languages on the Web",
      "subheader": "Percent of users",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "topPercentageOfLanguages": 26,
        "commonLanguages": [
          {
            "spoken": {
              "lang": "Chinese",
              "pct": 26
            },
            "internet": {
              "lang": "English",
              "pct": 26
            }
          },
          {
            "spoken": {
              "lang": "Spanish",
              "pct": 20
            },
            "internet": {
              "lang": "Chinese",
              "pct": 20
            }
          },
          {
            "spoken": {
              "lang": "English",
              "pct": 16
            },
            "internet": {
              "lang": "Spanish",
              "pct": 16
            }
          },
          {
            "spoken": {
              "lang": "Hindi",
              "pct": 14
            },
            "internet": {
              "lang": "Japanese",
              "pct": 14
            }
          },
          {
            "spoken": {
              "lang": "Arabic",
              "pct": 12
            },
            "internet": {
              "lang": "Portuguese",
              "pct": 12
            }
          },
          {
            "spoken": {
              "lang": "Portuguese",
              "pct": 10
            },
            "internet": {
              "lang": "German",
              "pct": 10
            }
          },
          {
            "spoken": {
              "lang": "Bengali",
              "pct": 9
            },
            "internet": {
              "lang": "Arabic",
              "pct": 9
            }
          },
          {
            "spoken": {
              "lang": "Russian",
              "pct": 8
            },
            "internet": {
              "lang": "French",
              "pct": 8
            }
          },
          {
            "spoken": {
              "lang": "Japanese",
              "pct": 5
            },
            "internet": {
              "lang": "Russian",
              "pct": 5
            }
          },
          {
            "spoken": {
              "lang": "Punjabi",
              "pct": 3
            },
            "internet": {
              "lang": "Korean",
              "pct": 3
            }
          }
        ]
      }
    },
    "accessible": {
      "header": "How to make content more accessible",
      "subheader": "NEEDS CONTENT",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "sections": [
          {
            "title": "1/9 of Internet users have a vision impairment",
            "imageUrl": "/images/accessible-1.png",
            "fullWidth": true
          },
          {
            "title": "Screen readers",
            "imageUrl": "/images/accessible-2.png",
            "copy": "This sends information to a speech synthesizer to be spoken or to a Braille display. When designing a site, make sure your content divisions are friendly for screen readers to access.",
            "linkCopy": "Learn more",
            "linkUrl": "#",
            "fullWidth": false
          },
          {
            "title": "Special browsers",
            "imageUrl": "/images/accessible-3.png",
            "copy": "A browser is designed specifically for blind users. It should be able to discriminate the structure of your page, to the extent that the page has a structure, and pass the information on to the user in a meaningful way.",
            "linkCopy": "Learn more",
            "linkUrl": "#",
            "fullWidth": false
          },
          {
            "title": "Screen magnification",
            "imageUrl": "/images/accessible-4.png",
            "copy": "Some users will use a screen magnification program. For these users, your choice of color and layout can make an enormous difference in their experience of your page.",
            "linkCopy": "Learn more",
            "linkUrl": "#",
            "fullWidth": false
          }
        ]
      }
    },
    "infrastructure": {
      "header": "Stock prices of internet and mobile operators",
      "subheader": "Share prices by year",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "dataLabels": [
          "Internet Companies",
          "Mobile Companies"
        ],
        "lineGraphData": [
          {
            "label": "2004",
            "data": [
              43.23,
              53.36
            ]
          },
          {
            "label": "2005",
            "data": [
              60.01,
              55.13
            ]
          },
          {
            "label": "2006",
            "data": [
              73.92,
              61.34
            ]
          },
          {
            "label": "2007",
            "data": [
              110.76,
              91.27
            ]
          },
          {
            "label": "2008",
            "data": [
              107.17,
              81.29
            ]
          },
          {
            "label": "2009",
            "data": [
              108.92,
              60.96
            ]
          },
          {
            "label": "2010",
            "data": [
              155.98,
              67.43
            ]
          },
          {
            "label": "2011",
            "data": [
              186.40,
              75.46
            ]
          },
          {
            "label": "2012",
            "data": [
              230.62,
              69.98
            ]
          },
          {
            "label": "2013",
            "data": [
              262.03,
              70.56
            ]
          }
        ]
      }
    },
    "contentCreation": {
      "header": "Availability of self-publishing tools with ability to retain ownership of content",
      "subheader": "Excerpt from Instagram's Terms of Service",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "url": "/images/content-creation-infographic.png"
      }
    },
    "identityControl": {
      "header": "Market share of social login providers",
      "subheader": "Percent per Q3 of 2014",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "marketShare": [
          {
            "company": "Other",
            "value": 5
          },
          {
            "company": "LinkedIn",
            "value": 3
          },
          {
            "company": "Yahoo",
            "value": 4
          },
          {
            "company": "Microsoft",
            "value": 2
          },
          {
            "company": "Twitter",
            "value": 7
          },
          {
            "company": "Google",
            "value": 34
          },
          {
            "company": "Facebook",
            "value": 45
          }
        ]
      }
    },
    "publicTrust": {
      "header": "Net positive view of industries",
      "subheader": "Percent by Year",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "dataLabels": [
          "Internet",
          "Computing"
        ],
        "lineGraphData": [
          {
            "label": "2001",
            "data": [
              17,
              57
            ]
          },
          {
            "label": "2002",
            "data": [
              22,
              55
            ]
          },
          {
            "label": "2003",
            "data": [
              31,
              64
            ]
          },
          {
            "label": "2004",
            "data": [
              23,
              52
            ]
          },
          {
            "label": "2005",
            "data": [
              24,
              47
            ]
          },
          {
            "label": "2006",
            "data": [
              29,
              50
            ]
          },
          {
            "label": "2007",
            "data": [
              35,
              51
            ]
          },
          {
            "label": "2008",
            "data": [
              32,
              54
            ]
          },
          {
            "label": "2009",
            "data": [
              30,
              53
            ]
          },
          {
            "label": "2010",
            "data": [
              28,
              49
            ]
          },
          {
            "label": "2011",
            "data": [
              40,
              62
            ]
          },
          {
            "label": "2012",
            "data": [
              36,
              63
            ]
          },
          {
            "label": "2013",
            "data": [
              34,
              56
            ]
          },
          {
            "label": "2014",
            "data": [
              27,
              58
            ]
          }
        ]
      }
    },
    "dataTracking": {
      "header": "Top 15 Data Trackers",
      "subheader": "Percentage of User History",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "tracking": [
          {
            "company": "Google",
            "tracker": "google-analytics.com",
            "percent": 56
          },
          {
            "company": "Google",
            "tracker": "doubleclick.net",
            "percent": 50
          },
          {
            "company": "comScore",
            "tracker": "scorecardresearch.com",
            "percent": 38
          },
          {
            "company": "Facebook",
            "tracker": "facebook.com",
            "percent": 31
          },
          {
            "company": "Google",
            "tracker": "google.com",
            "percent": 24
          },
          {
            "company": "Google",
            "tracker": "googleapis.com",
            "percent": 23
          },
          {
            "company": "Facebook",
            "tracker": "facebook.net",
            "percent": 23
          },
          {
            "company": "Quantcast",
            "tracker": "quantserve.com",
            "percent": 23
          },
          {
            "company": "Twitter",
            "tracker": "twitter.com",
            "percent": 22
          },
          {
            "company": "Google",
            "tracker": "googleadservices.com",
            "percent": 20
          },
          {
            "company": "Google",
            "tracker": "googlesyndication.com",
            "percent": 20
          },
          {
            "company": "Google",
            "tracker": "2mdn.net",
            "percent": 18
          },
          {
            "company": "Facebook",
            "tracker": "fbcdn.net",
            "percent": 17
          },
          {
            "company": "Google",
            "tracker": "gstatic.com",
            "percent": 17
          },
          {
            "company": "Ad Nexus",
            "tracker": "adnxs.com",
            "percent": 17
          }
        ]
      }
    },
    "surveillance": {
      "header": "Surveillance as a Business Model",
      "subheader": "Vicious cycle of data collection",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "surveillance": [
          {
            "name": "No Scarcity",
            "description": "In the offline world, inventory of a space is constrained. In the online world, inventory is theoretically infinite. Web companies make money by selling more and more page views, in turn making online advertising cheaper."
          },
          {
            "name": "Advertising",
            "description": "For most web companies, advertising is the sole viable business model as they are competing with \"free\" alternatives."
          },
          {
            "name": "Further Entrenched",
            "description": "With little pressure from government, or for users addicted to \"free\", web advertising becomes further entrenched."
          },
          {
            "name": "Lack of Regulation",
            "description": "Governments have no incentives to regulate data collection and usage."
          },
          {
            "name": "Surveillance",
            "description": "Government agencies tap into it with (or without) companies cooperation with little to no oversight."
          },
          {
            "name": "Government Access",
            "description": "There is little courts can do to block government from accessing this data for security purposes when private companies already do so for commerical purposes."
          },
          {
            "name": "Data Storage",
            "description": "Massive amounts of data on individuals are collected, stored, and exchanged by web companies."
          },
          {
            "name": "Data Collection",
            "description": "Web advertising competes with offline advertising by promising advertisers that they can perfectly target messages to individuals. This requires that advertising companies collect data useful for identifying individuals and their interests."
          }
        ]
      }
    },
    "userAgreements": {
      "header": "Top 5 Internet Companies",
      "subheader": "by Revenue",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "termsAndConditions": [
          {
            "length": 36275,
            "minutes": 201,
            "name": "Paypal",
            "shakespeare": false
          },
          {
            "length": 30066,
            "minutes": 167,
            "name": "Hamlet",
            "shakespeare": true
          },
          {
            "length": 19972,
            "minutes": 110,
            "name": "Apple iTunes",
            "shakespeare": false
          },
          {
            "length": 18110,
            "minutes": 100,
            "name": "Macbeth",
            "shakespeare": true
          },
          {
            "length": 14714,
            "minutes": 81,
            "name": "Windows Live",
            "shakespeare": false
          },
          {
            "length": 13366,
            "minutes": 74,
            "name": "Apple iOS 5",
            "shakespeare": false
          },
          {
            "length": 11195,
            "minutes": 62,
            "name": "Facebook",
            "shakespeare": false
          },
          {
            "length": 10724,
            "minutes": 60,
            "name": "Apple iCloud",
            "shakespeare": false
          },
          {
            "length": 10640,
            "minutes": 60,
            "name": "Google",
            "shakespeare": false
          },
          {
            "length": 7115,
            "minutes": 39,
            "name": "Amazon Kindle",
            "shakespeare": false
          },
          {
            "length": 4445,
            "minutes": 24,
            "name": "Twitter",
            "shakespeare": false
          }
        ]
      }
    },
    "openSource": {
      "header": "Operating system (OS) vs. browser source usage",
      "subheader": "Percent by Year",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "dataLabels": {
          "os": [
            "OS Closed Source",
            "OS Open Source",
            "OS Free and Open Source"
          ],
          "browser": [
            "Browser Closed Source",
            "Browser Open Source",
            "Browser Free and Open Source"
          ]
        },
        "lineGraphData": [
          {
            "label": "2008",
            "data": [
              99.10,
              0.01,
              0.60,
              73.10,
              1.40,
              25.30
            ]
          },
          {
            "label": "2009",
            "data": [
              99.00,
              0.01,
              0.70,
              66.20,
              3.10,
              30.50
            ]
          },
          {
            "label": "2010",
            "data": [
              97.75,
              0.25,
              1.65,
              59.60,
              9.95,
              30.50
            ]
          },
          {
            "label": "2011",
            "data": [
              94.90,
              1.70,
              2.80,
              50.80,
              22.40,
              26.35
            ]
          },
          {
            "label": "2012",
            "data": [
              92.70,
              3.95,
              2.40,
              44.40,
              33.80,
              21.65
            ]
          },
          {
            "label": "2013",
            "data": [
              88.75,
              8.15,
              2.20,
              41.80,
              42.05,
              17.00
            ]
          },
          {
            "label": "2014",
            "data": [
              80.30,
              16.35,
              2.00,
              38.50,
              47.50,
              13.80
            ]
          }
        ]
      }
    },
    "openDataStandards": {
      "header": "Do key online services allow data portability?",
      "subheader": "Can you extract data?",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "dataStandards": [
          {
            "service": "Google",
            "answer": "Partial",
            "comments": "An impressive number of products and services, but not search history"
          },
          {
            "service": "Facebook",
            "answer": "Partial",
            "comments": "Almost all of your data (deserve credit for this), but not your search history"
          },
          {
            "service": "Twitter",
            "answer": "Yes",
            "comments": "NEEDS CONTENT"
          },
          {
            "service": "WhatsApp",
            "answer": "Yes",
            "comments": "NEEDS CONTENT"
          },
          {
            "service": "LinkedIn",
            "answer": "Partial",
            "comments": "Can export your contacts, which is core to LinkedIn's offer"
          },
          {
            "service": "Reddit",
            "answer": "No",
            "comments": "Not supported, but Reddit community offers hacks to help you do this"
          },
          {
            "service": "Tumblr",
            "answer": "No",
            "comments": "Not supported, but Tumblr community offers hacks to help you do this"
          },
          {
            "service": "Pinterest",
            "answer": "No",
            "comments": "Not supported, but Pinterest community offers hacks to help you do this"
          },
          {
            "service": "Instagram",
            "answer": "No",
            "comments": "Not supported, but Instagram community offers hacks to help you do this"
          },
          {
            "service": "Wordpress",
            "answer": "Yes",
            "comments": "NEEDS CONTENT"
          }
        ]
      }
    },
    "dataRegulation": {
      "header": "NEEDS CONTENT",
      "subheader": "NEEDS CONTENT",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "countryData": {
          "shading": {
            "name": "dataRegulationStatus",
            "invert": false,
            "values": [
              0.01,
              1.01,
              2.01
            ],
            "legend": [
              "Low",
              "Medium",
              "High"
            ]
          },
          "display": {
            "name": "dataRegulationType",
            "units": ""
          }
        }
      }
    },
    "lobbyPower": {
      "header": "Lobbying Expenditures vs. Revolvers*",
      "subheader": "in $ and % per year",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "dataLabels": [
          "Expenditures",
          "Revolvers"
        ],
        "lineGraphData": [
          {
            "label": "1998",
            "data": [
              1450000000,
              44.70
            ]
          },
          {
            "label": "1999",
            "data": [
              1450000000,
              43.70
            ]
          },
          {
            "label": "2000",
            "data": [
              1570000000,
              48.20
            ]
          },
          {
            "label": "2001",
            "data": [
              1640000000,
              50.90
            ]
          },
          {
            "label": "2002",
            "data": [
              1830000000,
              54.90
            ]
          },
          {
            "label": "2003",
            "data": [
              2060000000,
              57.00
            ]
          },
          {
            "label": "2004",
            "data": [
              2200000000,
              56.80
            ]
          },
          {
            "label": "2005",
            "data": [
              2440000000,
              57.50
            ]
          },
          {
            "label": "2006",
            "data": [
              2630000000,
              60.10
            ]
          },
          {
            "label": "2007",
            "data": [
              2870000000,
              60.70
            ]
          },
          {
            "label": "2008",
            "data": [
              3300000000,
              63.70
            ]
          },
          {
            "label": "2009",
            "data": [
              3500000000,
              66.60
            ]
          },
          {
            "label": "2010",
            "data": [
              3550000000,
              67.50
            ]
          },
          {
            "label": "2011",
            "data": [
              3330000000,
              68.50
            ]
          },
          {
            "label": "2012",
            "data": [
              3310000000,
              68.60
            ]
          },
          {
            "label": "2013",
            "data": [
              3240000000,
              68.90
            ]
          }
        ]
      }
    },
    "censorship": {
      "header": "Top 5 Internet Companies",
      "subheader": "by Revenue",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "countryData": {
          "shading": {
            "name": "levelOfFreedom",
            "invert": true,
            "values": [
              0.01,
              1.01,
              2.01
            ],
            "legend": [
              "Not Free",
              "Partly Free",
              "Free"
            ]
          },
          "display": {
            "name": "freedomScore",
            "units": ""
          }
        }
      }
    },
    "cyberThreats": {
      "header": "The Different Types of Cyber-Threats",
      "subheader": "Vulnerabilities, Malware, and Exploits",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "cyberThreats": [
          {
            "name": "Phishing",
            "description": "A high-tech scam that frequently uses spam or pop-up messages to deceive people into disclosing sensitive information. Internet scammers use e-mail bait to \"phish\" for passwords and financial information from the sea of internet users.",
            "category": "Vulnerabilities"
          },
          {
            "name": "Viruses",
            "description": "Viruses are programs that “infect” other programs, and when those programs are run, the virus is able to spread. It is possible for a virus to be benign, but they are usually designed maliciously.",
            "category": "Malware"
          },
          {
            "name": "Zero-day Exploit",
            "description": "A \"zero-day\" exploit is a technique developed to take advantage of a security vulnerability that was previously unknown.",
            "category": "Exploits"
          },
          {
            "name": "Spamming",
            "description": "Spam is \"junk\" email - unsolicited advertising. Because of the very low cost of sending email, a lot of spam is delivered, from reasonably reputable promotional emails to more malicious and potentially damaging material.",
            "category": "Vulnerabilities"
          },
          {
            "name": "Worms",
            "description": "Worms are similar to viruses, but they are able to reproduce themselves independently of other software programs and propogate themselves across a network of machines.",
            "category": "Malware"
          },
          {
            "name": "Cross-site Scripting",
            "description": "Cross site scripting (\"XSS\") is an exploit where a trusted website is also hosting a third party's code (often unwittingly) that a user will execute.",
            "category": "Exploits"
          },
          {
            "name": "Weak Passwords",
            "description": "More and more Internet services require users choose more complex passwords. That is because weaker passwords (which may seem more memorable to the user) can easily be auto-generated in \"brute force\" methods to crack passwords.",
            "category": "Vulnerabilities"
          },
          {
            "name": "Trojan Horses",
            "description": "A trojan horse is a program that conceals its true purpose. It may appear to be useful for the user, but have a true purpose to leak data, for example.",
            "category": "Malware"
          },
          {
            "name": "Denial of Service Attack",
            "description": "A Denial of Service attack is a method whereby a sytem is flooded with inbound requests, consuming all its resources and effectively taking the system out of action. A distributed denial of service attack (DDOS) is such an attack where multiple systems are attacking the target.",
            "category": "Exploits"
          },
          {
            "name": "Removable Media",
            "description": "It is easily overlooked, but removable media (such as USB drives) may be used to transmit malicious software.",
            "category": "Vulnerabilities"
          },
          {
            "name": "Spyware",
            "description": "Spyware is software that is installed on a user's machine, frequently without their knowledge, which transmits data about the user. Spyware may be a trojan horse, or it may not be visible to the user.",
            "category": "Malware"
          },
          {
            "name": "Packet Sniffing",
            "description": "Packet sniffners are program that intercept and inspect data packets frequently looking for sensitive information, such as unencrypted passwords.",
            "category": "Exploits"
          }
        ]
      }
    },
    "cyberBullying": {
      "header": "NEEDS CONTENT",
      "subheader": "Needs more content.",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "cyberBullyingData": {
          "socialNetwork": {
            "title": "Social Network Rise",
            "lineData": [
              {
                "label": "2010",
                "data": [
                  85
                ]
              },
              {
                "label": "2011",
                "data": [
                  86
                ]
              },
              {
                "label": "2012",
                "data": [
                  93
                ]
              },
              {
                "label": "2013",
                "data": [
                  89
                ]
              },
              {
                "label": "2014",
                "data": [
                  90
                ]
              }
            ]
          },
          "cyberStalking": {
            "title": "Around 6.5 out of 10 students experienced cyberstalking in 2013.",
            "copy": "Cyberstalking is the use of the Internet or other electronic means to stalk or harass an individual, a group, or an organization.",
            "imageUrl": "/images/cyber-bullying-stalking.png"
          },
          "onlineHarassment": {
            "title": "Online Harassment",
            "circleData": [
              {
                "name": "Online Dating",
                "value": 6
              },
              {
                "name": "Discussion Site",
                "value": 10
              },
              {
                "name": "Email",
                "value": 16
              },
              {
                "name": "Online Gaming",
                "value": 17
              },
              {
                "name": "Website Comments Section",
                "value": 22
              },
              {
                "name": "Social Networking Site",
                "value": 66
              }
            ]
          }
        }
      }
    },
    "networkDecentralization": {
      "header": "Top 5 Internet Companies",
      "subheader": "by Revenue",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "countryData": {
          "shading": {
            "name": "governmentControl",
            "invert": false,
            "values": [
              0.01,
              1.01,
              2.01
            ],
            "legend": [
              "Easy",
              "Moderate",
              "Difficult"
            ]
          },
          "display": {
            "name": "pointsOfControl",
            "units": ""
          }
        }
      }
    },
    "cloudSecurity": {
      "header": "News headlines post-iCloud leaks",
      "subheader": "International News Sources",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "newsSource": [
          {
            "headline": "Apple says it will add new iCloud security measures after celebrity hack",
            "logoUrl": "/images/cloud-security-nytimes.png",
            "inverted": false
          },
          {
            "headline": "Apple actively investigating iCloud link to celeb photo leak",
            "logoUrl": "/images/cloud-security-cnet.png",
            "inverted": true
          },
          {
            "headline": "Is it safe for you to use the cloud after celebrity hack?",
            "logoUrl": "/images/cloud-security-time.png",
            "inverted": false
          },
          {
            "headline": "iCloud celebrity photo hack: texts, address books and more also accessible",
            "logoUrl": "/images/cloud-security-sydney.png",
            "inverted": true
          },
          {
            "headline": "Nuove foto di star nude sul web",
            "logoUrl": "/images/cloud-security-cds.png",
            "inverted": false
          },
          {
            "headline": "Continua o vazamento de imagens de famosos enquanto a Apple nega ataque",
            "logoUrl": "/images/cloud-security-elpais.png",
            "inverted": true
          },
          {
            "headline": "Apple \"indigné\", va revoir la sécurité des comptes iCloud",
            "logoUrl": "/images/cloud-security-lemonde.png",
            "inverted": false
          },
          {
            "headline": "Apple erklärt Nackfoto-Skandal mit passwortklau",
            "logoUrl": "/images/cloud-security-diewelt.png",
            "inverted": true
          }
        ]
      }
    },
    "netNeutrality": {
      "header": "Top 5 Internet Companies",
      "subheader": "by Revenue",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "countryData": {
          "shading": {
            "name": "percentBitTorrent",
            "invert": true,
            "values": [
              20.0,
              40.0,
              60.0,
              80.0,
              100.0
            ],
            "legend": [
              "Less than 20%",
              "20-40%",
              "40-60%",
              "60-80%",
              "Greater than 80%"
            ]
          },
          "display": {
            "name": "percentBitTorrent",
            "units": "%"
          }
        }
      }
    },
    "zeroRating": {
      "header": "Zero-rating cycle",
      "subheader": "From operators to consumers to content providers",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
          "cycle" : {
              "mainTriangle" : [
                  "Operators",
                  "Consumers",
                  "Content Providers"
              ],
              "outsideCircle" : [
                  "Zero-rated services are accessible at no charge",
                  "Content providers gain new users",
                  "Negotiate referential access for online content"
              ],
              "sideTriangle": "Users have to pay to access the rest of the Web",
              "insideTriangle": "For users coming online for the first time, their services become their only experience"
          }
      }
    },
    "platformNeutrality": {
      "header": "Developers that target Mobile Web vs. Native platform",
      "subheader": "Percentage per Q3 of 2014",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "percentOfUsers": [
          {
            "type": "Mobile",
            "value": 15
          },
          {
            "type": "Android",
            "value": 30
          },
          {
            "type": "iOS",
            "value": 49
          }
        ]
      }
    },
    "concentrationOfPower": {
      "header": "Revenue by top internet companies vs. countries",
      "subheader": "Total reserves in US$ for 2013",
      "source": {
        "name": "",
        "src": ""
      },
      "dataPoints": {
        "totalRevenue": [
          {
            "name": "Apple",
            "amount": 155,
            "tech": true
          },
          {
            "name": "Italy",
            "amount": 146,
            "tech": false
          },
          {
            "name": "United Kingdom",
            "amount": 104,
            "tech": false
          },
          {
            "name": "Microsoft",
            "amount": 89,
            "tech": true
          },
          {
            "name": "Philippines",
            "amount": 83,
            "tech": false
          },
          {
            "name": "Canada",
            "amount": 72,
            "tech": false
          },
          {
            "name": "Google",
            "amount": 62,
            "tech": true
          },
          {
            "name": "South Africa",
            "amount": 50,
            "tech": false
          }
        ]
      }
    }
  };
};
