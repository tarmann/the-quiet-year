export default [
  { suit: 'H', number: 'A',
    options: [
      "What group has the highest status in the community? What must people do to gain inclusion in this group?",
      "Are there distinct family units in the community? If so, what family structures are common?"
    ]
  },
  { suit: 'H', number: '2',
    options: [
      "There’s a large body of water on the map. Where is it? What does it look like?",
      "There’s a giant, man-made structure on the map. Where is it? Why is it abandoned?"
    ]
  },
  { suit: 'H', number: '3',
    options: [
      "Someone new arrives. Who?",
      "Two of the community’s younger members get into a fight. What provoked them?"
    ]
  },
  { suit: 'H', number: '4',
    options: [
      "Someone new arrives. Who?",
      "Two of the community’s younger members get into a fight. What provoked them?"
    ]
  },
  { suit: 'H', number: '5',
    options: [
      "There is a disquieting legend about this place. What is it? ",
      "Alarming weather patterns destroy something. How and what?"
    ]
  },
  { suit: 'H', number: '6',
    options: [
      "Are there children in your community? If there are, what is their role in the community?",
      "How old are the eldest members of the community? What special needs do they have?"
    ]
  },
  { suit: 'H', number: '7',
    options: [
      "Where does everyone sleep? Who is unhappy with this arrangement, and why?",
      "What natural predators roam this area? Are you safe?"
    ]
  },
  { suit: 'H', number: '8',
    options: [
      "An old piece of machinery is discovered, broken but perhaps repairable. What is it? What would it be useful for?",
      "An old piece of machinery is discovered, cursed and dangerous. How does the community destroy it?"
    ]
  },
  { suit: 'H', number: '9',
    options: [
      "A charismatic young girl convinces many to help her with an elaborate scheme. What is it? Who joins her endeavors? Start a project to reflect.",
      "A charismatic young girl tries to tempt many into sinful or dangerous activity. Why does she do this? How does the community respond?"
    ]
  },
  { suit: 'H', number: '10',
    options: [
      "There’s another community somewhere on the map. Where are they? What sets them apart from you?",
      "What belief or practice helps to unify your community?"
    ]
  },
  { suit: 'H', number: 'J',
    options: [
      "You see a good omen. What is it?",
      "You see a bad omen. What is it?"
    ]
  },
  { suit: 'H', number: 'Q',
    options: [
      "What’s the most beautiful thing in this area? or...",
      "What’s the most hideous thing in this area?"
    ]
  },
  { suit: 'H', number: 'K',
    options: [
      "A young boy starts digging in the ground, and discovers something unexpected. What is it?",
      "An old man confesses to past crimes and atrocities. What has he done?"
    ]
  },

  { suit: 'D', number: 'A',
    options: [
      "A contingent within the community demand to be heard. Who are they? What are they asking for?",
      "A contingent within the community have acted on their frustrations. What have they damaged, and why did they damage it? Is it permanent?"
    ]
  },
  { suit: 'D', number: '2',
    options: [
      "Someone new arrives. Who? Why are they in distress?",
      "Someone leaves the community. Who? What are they looking for?"
    ]
  },
  { suit: 'D', number: '3',
    options: [
      "Summer is a time for production and tending to the earth. <strong>Start a project related to food production</strong>.",
      "Summer is a time for conquest and the gathering of might. <strong>Start a project related to military readiness and conquest</strong>."
    ]
  },
  { suit: 'D', number: '4',
    options: [
      "The eldest among you dies. What caused the death?",
      "The eldest among you is very sick. Caring for them and searching for a cure requires the help of the entire community. <strong>Do not reduce project dice this week</strong>."
    ]
  },
  { suit: 'D', number: '5',
    options: [
      "<strong>A project finishes early.</strong> What led to its early completion?",
      "The weather is nice and people can feel the potential all around them. <strong>Start a new project.</strong>"
    ]
  },
  { suit: 'D', number: '6',
    options: [
      "Outsiders arrive in the area. Why are they a threat? How are they vulnerable?",
      "Outsiders arrive in the area. How many? How are they greeted?"
    ]
  },
  { suit: 'D', number: '7',
    options: [
      "Introduce a mystery at the edge of the map.",
      "An unattended situation becomes problematic and scary. What is it? How does it go awry?"
    ]
  },
  { suit: 'D', number: '8',
    options: [
      "Someone tries to take control of the community by force. Do they succeed? Why do they do this?",
      "A headstrong community member decides to put one of their ideas in motion. <strong>Start a foolish project.</strong>"
    ]
  },
  { suit: 'D', number: '8',
    options: [
      "<strong>A project fails.</strong> Which one? Why?",
      "A headstrong community member decides to put one of their ideas in motion. <strong>Start a foolish project.</strong>"
    ]
  },
  { suit: 'D', number: '9',
    options: [
      "Something goes foul and supplies are ruined. <strong>Add a new Scarcity</strong>",
      "A headstrong community member decides to put one of their ideas in motion. <strong>Start a foolish project.</strong>"
    ]
  },
  { suit: 'D', number: '10',
    options: [
      "You discover a cache of supplies or resources. <strong>Add a new Abundance.</strong>",
      "A Scarcity has gone unaddressed for too long! <strong>Start a project that will alleviate that Scarcity.</strong>"
    ]
  },
  { suit: 'D', number: 'J',
    options: [
      "Predators and bad omens are afoot. You are careless, and someone goes missing under ominous circumstances. Who?",
      "Predators and bad omens are afoot. What measures do you take to keep everyone safe and under surveillance? <strong>Do not reduce project dice this week.</strong>"
    ]
  },
  { suit: 'D', number: 'Q',
    options: [
      "<strong>A project finishes early.</strong> Which one? Why? <br> <i>If there are no projects underway,</i> boredom leads to quarrel. A fight breaks out between two people. What is it about?"
    ]
  },
  { suit: 'D', number: 'Q',
    options: [
      "Summer is fleeting. <strong>Discard the top two cards off the top of the deck and take two actions this week.</strong>"
    ],
    action: 'discardTwo'
  },

  { suit: 'C', number: 'A',
    options: [
      "The community becomes obsessed with a single project. Which one? Why? Choose one: <br> They decide to take more time to ensure that it is perfect. <strong>Add 3 weeks to the project die.</strong> <br>  They drop everything else to work on it. All other projects fail. <strong>All other projects fail.</strong> <br><br> <i>If there are no projects underway</i>, the community becomes obsessed with a grandiose vision. <strong>Hold a discussion about this vision, in addition to your regular action for the week. </strong>"
    ]
  },
  { suit: 'C', number: '2',
    options: [
      "Someone returns to the community. Who? Where were they?",
      "You find a body. Do people recognize who it is? What happened?"
    ]
  },
  { suit: 'C', number: '3',
    options: [
      "Someone leaves the community after issuing a dire warning. Who? What is the warning?",
      "Someone issues a dire warning, and the community leaps into action to avoid disaster. What is the warning? <strong>Start a contentious project that relates to it.</strong>"
    ]
  },
  { suit: 'C', number: '4',
    options: [
      "The strongest among you dies. What caused the death?",
      "The weakest among you dies. Who’s to blame for their death?"
    ]
  },
  { suit: 'C', number: '5',
    options: [
      "The Parish arrives. Who are they? Why have they chosen your community, and for what?",
      "A small gang of marauders is making its way through local terrain. How many are there? What weapons do they carry?"
    ]
  },
  { suit: 'C', number: '6',
    options: [
      "Introduce a dark mystery among the members of the community.",
      "Conflict flares up among community members, and as a result, <strong>a project fails</strong>."
    ]
  },
  { suit: 'C', number: '7',
    options: [
      "A project just isn’t working out as expected. <strong>Radically change the nature of this project (don’t modify the project die). When it resolves, you’ll be responsible for telling the community how it went.</strong>",
      "Something goes foul and supplies are ruined. <strong>Add a new Scarcity.</strong>"
    ]
  },
  { suit: 'C', number: '8',
    options: [
      "Someone sabotages a project, and <strong>the project fails</strong> as a result. Who did this? Why?",
      "Someone is caught trying to sabotage the efforts of the community. How does the community respond?"
    ]
  },
  { suit: 'C', number: '9',
    options: [
      "The community works constantly and as a result <strong>a project finishes early</strong>.",
      "A group goes out to explore the map more thoroughly, and finds something that had been previously overlooked."
    ]
  },
  { suit: 'C', number: '10',
    options: [
      "Harvest is here and plentiful. <strong>Add an Abundance</strong>.",
      "Cold autumn winds drive out your enemies. <strong>Remove a threatening force from the map and the area</strong>."
    ]
  },
  { suit: 'C', number: 'J',
    options: [
      "<strong>A project finishes early.</strong> Which one? Why? <br> <i>If there are no projects underway</i>, restlessness creates animosity, and animosity leads to violence. Who gets hurt?"
    ]
  },
  { suit: 'C', number: 'Q',
    options: [
      "Disease spreads through the community. Choose one: <br>  You spend the week quarantining and treating the disease. <strong>Project dice are not reduced this week</strong> <br>  Nobody knows what to do about it. <strong>Add “Health and Fertility” as a Scarcity</strong>."
    ]
  },
  { suit: 'C', number: 'K',
    options: [
      "A natural disaster strikes the area. What is it? Choose one: <br> • You focus on getting everyone to safety. <strong>Remove an Abundance and a project fails.</strong> <br> You focus on protecting your supplies and hard work at any cost. Several people die as a result."
    ]
  },

  { suit: 'S', number: 'A',
    options: [
      "Now is the time to conserve energy and resources. <strong>A project fails, but gain an Abundance.</strong>",
      "Now is the time for hurried labour and final efforts. <strong>A project finishes early, but gain a Scarcity</strong>."
    ]
  },
  { suit: 'S', number: '2',
    options: [
      "A headstrong community member takes charge of the community’s work efforts. <strong>A project fails, and then a different project finishes early</strong>.",
      "A headstrong community member tries to take control of the community. How are they prevented from doing this? Due to the conflict, <strong>project dice are not reduced this week</strong>."
    ]
  },
  { suit: 'S', number: '3',
    options: [
      "Someone comes up with an ingenious solution to a big problem and as a result <strong>a project finishes early. </strong> What was their idea?",
      "Someone comes up with a plan to ensure safety and comfort during the coldest months. <strong>Start a project related to this</strong>."
    ]
  },
  { suit: 'S', number: '4',
    options: [
      "All the animals and young children are crying and won’t stop. <strong>Hold a discussion about this</strong>, in addition to your regular action for the week.",
      "A great atrocity is revealed. What is it? Who uncovers it?"
    ]
  },
  { suit: 'S', number: '5',
    options: [
      "Winter elements destroy a food source. If this was your only food source, <strong>add a Scarcity</strong>.",
      "Winter elements leave everyone cold, tired, and miserable. <strong>Project dice are not reduced this week</strong>."
    ]
  },
  { suit: 'S', number: '6',
    options: [
      "The time has come to consolidate your efforts and your borders. <strong>Projects located outside the settlement fail, and all remaining projects are reduced by 1 this week</strong>.",
      "Someone finds a curious opportunity on the edge of the map. <strong>Start a project related to this discovery</strong>."
    ]
  },
  { suit: 'S', number: '7',
    options: [
      "What is winter like in this area? How do community members react to the weather?"
    ]
  },
  { suit: 'S', number: '8',
    options: [
      "Winter is harsh, and desperation gives rise to fear mongering. Choose one: <br> Spend the week calming the masses and dispelling their violent sentiments. The week ends immediately. <br>Declare war on someone or something. This counts as starting a project."
    ]
  },
  { suit: 'S', number: '9',
    options: [
      "Someone goes missing. They’re alone in the winter elements. Choose one: <br> The community organizes constant search parties and eventually the person is found. <strong>Project dice are not reduced this week</strong>. <br> No one ever hears from that person again."
    ]
  },
  { suit: 'S', number: '10',
    options: [
      "In preparation for the coming year, the community begins a huge undertaking. <strong>Start a project</strong> that will take at least 5 weeks to complete."
    ]
  },
  { suit: 'S', number: 'J',
    options: [
      "An infected outsider arrives, seeking amnesty. They have some much-needed resources with them. Choose one: <br> Welcome them into the community. <strong>Remove a Scarcity</strong>, but also introduce an infection into the community. <br> Bar them from entry. What Scarcity could they have addressed? How does its need become more dire this week?"
    ]
  },
  { suit: 'S', number: 'Q',
    options: [
      "You see a good omen. What is it?"
    ]
  },
  { suit: 'S', number: 'K',
    options: [
      "The Frost Shepherds arrive. <strong>The game is over.</strong>"
    ]
  }
];
