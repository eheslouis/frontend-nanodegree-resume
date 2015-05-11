var bio = {
    "name": "Elodie Heslouis",
    "role": "Software Engineer - Web Developer",
    "contacts": {
        "mobile": "(+84) 123 223 0500",
        "email": "eheslouis@gmail.com",
        "github": "eheslouis",
        "twitter": "@eheslouis",
        "location": "Hanoi, Vietnam"
    },
    "picture": "images/me.jpg",
    "welcomeMessage": "Welcome",
    "skills": [
        "awesome",
        "cute",
        "delivering things on time"
    ],
    "inName": function (name){
        var array=name.trim().split(" ");
        array[0]=array[0][0].toUpperCase() + array[0].slice(1).toLowerCase();
        array[1]=array[1].toUpperCase();

        return array[0]+" "+array[1];
    },
    "display": function(){
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%",bio.inName(bio.name)));

        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#header").append(HTMLbioPic.replace("%data%", bio.picture));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

        $("#header").append(HTMLskillsStart);
        for (var index in bio.skills)
        {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[index]));
        }

        $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    }
}


var education = {
    "schools": [
        {
            "school": "ISEP",
            "city": "Paris, France",
            "degree": "Master Degree in Computer Engineering",
            "graduateYear": "2005",
            "major": "Computer Engineering",
            "url": "http://www.isep.fr"
        }
    ],
    "OnlineClass": [
        {
            "school": "Udacity",
            "class": "JavaScript Basic",
            "year": "2015",
            "url": "http://www.udacity.com"
        }
    ],
    "display": function(){
        for (var index in education.schools)
        {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[index].school).replace("#", education.schools[index].url)+HTMLschoolDegree.replace("%data%", education.schools[index].degree));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[index].graduateYear));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[index].city));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[index].major));
        }

        $("#education").append(HTMLonlineClasses);
        for (index in education.OnlineClass)
        {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.OnlineClass[index].class).replace("#", education.OnlineClass[index].url)+HTMLonlineSchool.replace("%data%", education.OnlineClass[index].school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.OnlineClass[index].year));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.OnlineClass[index].url).replace("#", education.OnlineClass[index].url));
        }
    }
}


var work = {
    "jobs": [
        {
            "position": "Senior Software Engineer",
            "employer": "Schlumberger",
            "date": "Nov 2011 - July 2014",
            "city": "Stonehouse, UK",
            "description": "My role was to design, develop, test and commercialize new functionalities for a real-time telemetry data acquisition system used for oil and gas drilling. I was also involved in improving, sustaining and updating functionalities. My main responsibilities included:<br> - Design and create a telemetry propagation simulation application related to oil and gas well, using C# and C++ and Model-View-Controller (MVC) pattern;<br> Design and build the first version of a real-time telemetry anomalies detection application using C# language, Agile and Test Driven Development (TDD) procedures. Develop algorithms for each anomalies using MATLAB and analyzing field data;<br> - Sustain and update existing functionalities of the system;<br> - Quality assurance test for several functionalities as part of a real-time acquisition system for commercialization every six months;<br> - Coordinate and collaborate for implementation and integration testing of new requirements between real-time acquisition system and different system developed in different parts of the world;<br> - Perform code review, worked close to junior team members to ensure consistence to code standards;<br> - Mentor junior software engineers.<br> Key Technologies: .NET 3.5 - 4.0, C#, C++, MFC, XML, TDD, OOA/D."
        },
        {
            "position": "Software Engineer",
            "employer": "Schlumberger",
            "date": "Oct 2006 - Oct 2011",
            "city": "Sugar Land, TX, USA",
            "description": "I was working on an existing real-time data acquisition system comprising many real-time applications communicating via several shared memories. I was involved in the creation of several new applications, one being capable of detecting, inreal-time, specific and potentially catastrophic oilfield related events by analyzing real-time data. I was responsible for:<br> - Analyze field data and create algorithms using MATLAB to detect potentially catastrophic events such as lostcirculation, kick and washout. Design and create real-time C# application to implement these algorithms inside thedata acquisition system;<br> - Design, create and test a multi-thread C++ application sending real-time data available in the data acquisitionsystem to a server using customized WISTML format;<br> - Develop application receiving real-time data from a third party and sending real-time data from data acquisitionsystem to a database server or a third party through TCP/IP and COM ports using WITS, WITSML and otherspecific protocols related to the oil and gas business;<br> - Define requirements directly with client, follow up on progress and provide technical support;<br> - Sustain and implement updates to existing applications;<br> - Troubleshoot technical issues reported by users and implement solution.n Key Technologies: .NET 3.0-3.5, C#, C++, MFC, XML, WITS, WITSML, OPC."
        },
        {
            "position": "Software Engineer Intern",
            "employer": "Schlumberger",
            "date": "Oct 2005 - Sept 2006",
            "city": "Sugar Land, TX, USA",
            "description": "Research on compression algorithms for specific oil field images requiring high compression due to the low bit ratetransmission (2-4bps) and the short real-time delay (< 2 min.) using MATLAB."
        }
    ],
    "display": function (){
        if (work.jobs.length > 0)
        {
            for (index in work.jobs)
            {
                $("#workExperience").append(HTMLworkStart);
                var employer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
                var title = HTMLworkTitle.replace("%data%", work.jobs[index].position);
                var date = HTMLworkDates.replace("%data%", work.jobs[index].date);
                var loc = HTMLworkLocation.replace("%data%", work.jobs[index].city);
                var description = HTMLworkDescription.replace("%data%",work.jobs[index].description);
                $(".work-entry:last").append(employer+title+date+loc+description);
            }
        }
    }
}


var project = {
    "projects": [
        {
            "title": "Portfolio in HTLM",
            "date": "2015",
            "description": "create a HTML Portfolio",
            "picture": "images/projectPortfolio.png",
            "url": "https://github.com/eheslouis/Project1"
        }
    ],
    "display" : function(){
        for (index in project.projects){
            $("#projects").append(HTMLprojectStart);
            var title = HTMLprojectTitle.replace("%data%", project.projects[index].title).replace("#", project.projects[index].url);
            var date = HTMLprojectDates.replace("%data%", project.projects[index].date);
            var desc = HTMLprojectDescription.replace("%data%", project.projects[index].description);
            var img = HTMLprojectImage.replace("%data%", project.projects[index].picture)
            $(".project-entry:last").append(title+date+desc+img);
        }
    }
}


bio.display();

work.display();

project.display();

education.display();

$("#mapDiv").append(googleMap);
