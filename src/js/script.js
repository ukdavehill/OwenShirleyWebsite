const videoArea = document.querySelector(".video-area");

const videos = [
    {
        name: "https://player.vimeo.com/video/294531001",
        order: "v-1",
        title: "Full audio post-production",
        description: "",
        clientName: "Shunk Films",
        clientLink: "https://www.shunkfilms.co.uk/",
        id: "cropped-vid1"
    },
    {
        name: "https://player.vimeo.com/video/206720872",
        order: "v-2",
        title: "Sound Editing",
        description: "The short film 'Breakdown' won the award for Best Sound (Drama) at the <a href='https://rts.org.uk/article/rts-west-england-awards-winners-announced' target='_blank'>Royal Television Society West of England Awards 2018.</a>\
            <br> I sound edited the film, which was mixed in 5.1 by Andrew Wilson at Real World Studies.Original score by <a href='https://www.scotthazell.com/' target='_blank'>Scott Hazell</a> and Directed by <a href = 'https://davemackie.co.uk/'>Dave Mackie</a>",
        clientName: "Dave Mackie",
        clientLink: "https://davemackie.co.uk/"

    },
    {
        name: "https://player.vimeo.com/video/245042663",
        order: "v-3",
        title: "Sound Design",
        description: "Collaboration with motion graphics designer, Matt Gilligan. Voice Over taken from <a href='https://play.acast.com/s/distractionpieces/blindboyofrubberbandits-distractionpiecespodcastwithscroobiuspip-89' target='_blank'>Scroobius Pip’s Distraction Pieces podcast #89</a>",
        clientName: "Matt Gilligan",
        clientLink: "https://www.mattgilligan.com/"

    },
    {
        name: "https://www.youtube.com/embed/HOIA6YOJfTo",
        order: "v-4",
        title: "Full audio post-production",
        description: "I edited and mixed the sound for epsidoes 1 to 6 of “The Drunk’ webseries, starring Seann Walsh.",
        clientName: "Gabriel Foster-Prior",
        clientLink: "http://www.fosterprior.co.uk/"

    },
    {
        name: 'https://player.vimeo.com/video/175214101',
        order: "v-5",
        title: "Music & Sound Design",
        description: "For this work, I was given a brief of providing a clean, slick and contemporary soundtrack, working to the movement of the animated font.",
        clientName: "Chris Joyce",
        clientLink: "https://www.velvetbadger.com/info"
    },
    {
        name: "https://www.youtube.com/embed/g7N8sG1VahQ",
        order: "v-6",
        title: "Full audio post-production",
        description: "This is the fifth and final episode of the ‘One lapse can last a lifetime’ series for Mitie.",
        clientName: "JS Productions",
        clientLink: "https://www.jsproductions.tv/"
    },
    {
        name: "https://player.vimeo.com/video/148634793",
        order: "v-7",
        title: "Sound Design & Mix",
        description: "",
        clientName: "Scubaboy Inc",
        clientLink: "http://www.scubaboyinc.co.uk/"
    },
    {
        name: "https://player.vimeo.com/video/158911645",
        order: "v-8",
        title: "Music & Sound Design",
        description: "",
        clientName: "Al Boardman",
        clientLink: "https://www.alboardman.com/",
        id: "cropped-vid8"
    },

    {
        name: "https://www.youtube.com/embed/Q20fx2BJJbI",
        order: "v-9",
        title: "Full audio post-production",
        description: "The first in a new series of short films.",
        clientName: "JS Productions",
        clientLink: "https://www.jsproductions.tv/"
    },

    {
        name: "https://player.vimeo.com/video/144639395",
        order: "v-10",
        title: "Full audio post-production",
        description: "For this short, I edited the sync sound, added atmospheres and FX, and mixed with the music cues provided by the composer.",
        clientName: "Jonathan Hardy",
        clientLink: "http://www.jonathanhardyfilm.com/",
        id: "cropped-vid10"
    },

    {
        name: "https://www.youtube.com/embed/jwv4wZsohjU",
        order: "v-11",
        title: "Sound Design & Mix",
        description: "For this video I laid out the sound design elements and mixed these with the Voice Over and music track provided by the client.",
        clientName: "Scubaboy Inc",
        clientLink: "http://www.scubaboyinc.co.uk/"
    },
    {
        name: "https://player.vimeo.com/video/146177453",
        order: "v-12",
        title: "Full audio post-production",
        description: "This is a trailer for a short film that will be released in 2016, which I have sound designed, edited and mixed.  [WARNING: Contains potty mouth]",
        clientName: "Matty Groves",
        clientLink: "https://mattygroves.co.uk/"
    },
    {
        name: "https://www.youtube.com/embed/ZhxRnjB8F3I",
        order: "v-13",
        title: "Sound Design & Mix",
        description: "",
        clientName: "Al Boardman",
        clientLink: "https://www.alboardman.com/"
    },
    {
        name: "https://www.youtube.com/embed/nRfhYTcr43U",
        order: "v-14",
        title: "Sound Design & Mix",
        description: "",
        clientName: "JS Productions",
        clientLink: "https://www.jsproductions.tv/"
    },
    {
        name: "https://player.vimeo.com/video/124807425",
        order: "v-15",
        title: "Sound Design",
        description: "I worked as the Sound Designer on this submission to the 2015 <a href='http://sci-fi-london.com/48-hour-film-challenge' target='_blank'>48 HOUR FILM CHALLENGE.</a> This film was written, shot and edited between 11-13 April 2015. Post-production began 16 hours before the submission deadline and was completed with time to spare!",
        clientName: "Robot Dinsosaur",
        clientLink: "http://www.robot-dinosaur.co.uk/"
    },
    {
        name: "https://www.youtube.com/embed/Y5ncANXKGwk",
        order: "v-16",
        title: "Full audio post-production (1/3)",
        description: "For this series of three short films for Mitie, I worked closely with the Producer, James Sykes, and the Director/Editor, Matthew Freeth. ‘The Penalty’ was nominated for Best Short at the RTS West of England 2016 awards.",
        clientName: "JS Productions",
        clientLink: "https://www.jsproductions.tv/"
    },
    {
        name: "https://www.youtube.com/embed/6tTZYg-PUw8",
        order: "v-17",
        title: "Full audio post-production (2/3)",
        description: "For this series of three short films for Mitie, I worked closely with the Producer, James Sykes, and the Director/Editor, Matthew Freeth. ‘The Penalty’ was nominated for Best Short at the RTS West of England 2016 awards.",
        clientName: "JS Productions",
        clientLink: "https://www.jsproductions.tv/"
    },
    {
        name: "https://www.youtube.com/embed/NXYwbeleKBw",
        order: "v-18",
        title: "Full audio post-production (3/3)",
        description: "For this series of three short films for Mitie, I worked closely with the Producer, James Sykes, and the Director/Editor, Matthew Freeth. ‘The Penalty’ was nominated for Best Short at the RTS West of England 2016 awards.",
        clientName: "JS Productions",
        clientLink: "https://www.jsproductions.tv/"
    },

    {
        name: "https://www.youtube.com/embed/YlHHTmIkdis",
        order: "v-19",
        title: "Sound Design & Track Lay",
        description: "Working as a <strong>Dubbing Editor</strong> for <a href='http://www.blowoutsound.co.uk/' target='_blank'>Blow Out Sound</a> we provided the track lay for all 6 episodes of the flagship BBC series ‘Life Story’, working closely with the BBC Producers and Dubbing Mixer, Graham Wild.",
        clientName: "BBC Natural History Unit",
        clientLink: "https://www.bbcstudios.com/"
    },

    {
        name: "https://www.youtube.com/embed/4mHJ_NFJz6M",
        order: "v-20",
        title: "Sound Design & Track Lay",
        description: "I worked as a <strong>Dubbing Editor</strong> on four of the five episodes in the ‘Destination Wild: Brazil’ series, broadcast on <a href='https://www.terramater.at/productions/brazil-a-natural-history/' target='_blank'>National Geographic Wild</a>. Freelancing for <a href='http://www.blowoutsound.co.uk/' target='_blank'>Blow Out Sound</a>, full track lay was provided for Producer Paul Reddish and mixed by Graham Wild at Films at 59.",
        clientName: "Terra Mater",
        clientLink: "https://www.terramater.at/productions/brazil-a-natural-history/"
    },
    {
        name: "https://www.youtube.com/embed/msx3BAhIeQg",
        order: "v-21",
        title: "Sound Design & Track Lay",
        description: "Worked as a <strong>Dubbing Editor</strong> for <a href='http://www.blowoutsound.co.uk/' target='_blank'>Blow Out Sound</a> on episode 2 of ‘Dolphins – Spy in the Pod’, assisting Paul Cowgill. <strong>Sound editing and track lay</strong> was carried out in Pro Tools.",
        clientName: "John Downer Productions",
        clientLink: "http://jdp.co.uk/"
    },

    {
        name: "https://www.youtube.com/embed/bRGNd2uMpJc",
        order: "v-24",
        title: "Video Editing, Dubbing & Sound Design",
        description: "The footage for this trailer was shot in HD on a Canon 5D by <a href='https://www.mattygroves.co.uk/' target='_blank'>Matty Groves</a>. I <strong>cut & graded the footage</strong> in Premiere Pro. A locked edit was then sent to the animator before the sound work was carried out. I <strong>recorded the Voice Over and the cellist</strong> in my home studio. This was <strong>mixed in Pro Tools</strong> along with <strong>sound design</strong>, created from <strong>original FX</strong> and <strong>Foley</strong>.",
        clientName: "Byron Vincent",
        clientLink: "https://www.byronvincent.com/"
    },

    {
        name: "",
        order: "v-23",
        title: "Original Music and Sound Design",
        description: "For this online marketing ad, I was asked to provide some uplifting <strong>music</strong> and <strong>sound design</strong> to fit the animated video. <strong>Foley</strong> recorded in the studio and <strong>library sounds</strong> were added to a <strong>music track</strong> created in Ableton and mixed together in Pro Tools.",
        clientName: "Studio Okoku",
        clientLink: "https://www.okoku.in/",
        id: "text-id1"
    },

    {
        name: "https://www.youtube.com/embed/IDiaKoQzhpg",
        order: "v-22",
        title: "Video Editing & Music Production",
        description: "For this music video, I edited the video using Adobe Premiere Pro CS6, which was shot and directed by <a href='https://www.mattygroves.co.uk/' target='_blank'>Matty Groves</a> & produced the music for <a href='http://canolatenderfoot.co.uk/' target='_blank'>Canola Tenderfoot</a> using Ableton.",
        clientName: "Slime Recordings",
        clientLink: "https://slimerecordings.com/"
    }

];



function populateVideos() {
    var html = videos
        .map(video => {
            return `
      <div class="item ${video.order}">
      <div class="text">
        <h4>${video.title}</h4>
        <p>${video.description}
        <br>Client: <a href="${video.clientLink}" target="_blank">${video.clientName}</a>
        </p>
        <div class="icon"><i class="fas fa-caret-down"></i></div>
        </div>
        <div class = "video" id="${video.id}">
            <iframe
                src="${video.name}"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    </div>	`
        })
        .join("");

    videoArea.innerHTML =
        html + `<div id="page-message"><h3>Welcome to my site...</h3></div>`;
}

window.onload = function () {
    console.log("starting to populate");
    console.time('loading page');
    populateVideos();
    console.timeEnd('loading page');
    console.log("finished");
};

var toggleItem, toggleText, toggleVideo, toggleActive, toggleIcon;

function getClickedElement(el) {
    const target = el.target;
    const parent = target.parentNode;
    const gparent = parent.parentNode;
    const ggparent = gparent.parentNode;


    if (target.matches('h4')) {
        toggleItem = gparent;
        toggleText = parent;
        toggleVideo = gparent.querySelector('.video');
        toggleActive = parent.querySelector('p');
        toggleIcon = gparent.querySelector('.icon');
    }

    else if (target.matches('i')) {
        console.log('i clicked!!');
        toggleItem = ggparent;
        toggleText = gparent;
        toggleVideo = ggparent.querySelector('.video');
        toggleActive = gparent.querySelector('p');
        toggleIcon = parent;
    }

    else if (target.matches('div.text')) {
        console.log('div.text clicked!!');
        toggleItem = parent;
        toggleText = target;
        toggleVideo = parent.querySelector('.video');
        toggleActive = target.querySelector('p');
        toggleIcon = parent.querySelector('.icon');
    }

    else if (target.matches('p')) {
        console.log('p clicked!!');
        toggleItem = gparent;
        toggleText = parent;
        toggleVideo = gparent.querySelector('.video');
        toggleActive = target;
        toggleIcon = gparent.querySelector('.icon');
    }

    else if (target.matches('div.icon')) {
        console.log('div.icon clicked!!');
        toggleItem = gparent;
        toggleText = parent;
        toggleVideo = gparent.querySelector('.video');
        toggleActive = parent.querySelector('p');
        toggleIcon = target;
    }

    else if (target.matches('#page-message') || target.matches('h3')) {
        console.log('page-message clicked');
        toggleItem = false;
    }

}



videoArea.addEventListener('click', (e) => {
    console.log('clicked element is:')
    console.dir(e.target);


    getClickedElement(e);
    console.dir(toggleItem);



    if (toggleItem) {
        toggleItem.classList.toggle('item1');
        // toggleItem.style.minHeight = `${gridHeight}px`;
        toggleText.classList.toggle('text1');
        toggleVideo.classList.toggle('video1');
        toggleActive.classList.toggle('active');
        toggleIcon.classList.toggle('fa-rotate-180');
        e.stopPropagation();
    };
});



// SET MAX ROW OF DROPDOWN ON ROW

// debounce function from Underscore.js

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// ADD EVENT LISTENER FOR HAMBURGER MENU

const hamburger = document.querySelector('.hamburger');
const bars = hamburger.querySelector('.fa-bars');
const cross = hamburger.querySelector('.fa-times');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const ul = hamburger.querySelector('ul');

bars.addEventListener('click', function () {
    console.log('hamburger clicked');

    hamburgerMenu.classList.remove('hide-menu');
    cross.classList.remove('inactive');
    bars.classList.add('inactive');
}
);

cross.addEventListener('click', function () {
    console.log('cross clicked');
    hamburgerMenu.classList.add('hide-menu');
    cross.classList.add('inactive');
    bars.classList.remove('inactive');
})

// var gridHeight;

// var setRowHeight = debounce(function () {
//     var titleBox = document.getElementById('page-message');
//     console.log('window width is');
//     console.log(window.innerWidth);
//     console.log('from event Handler');
//     console.dir(titleBox);
//     console.log('box height is: ')
//     console.log(titleBox.offsetHeight);
//     console.log('box width is: ')
//     console.log(titleBox.offsetWidth);
//     gridHeight = titleBox.offsetHeight;
// }, 250);

// setMinRowHeight();
// window.addEventListener('resize', setRowHeight);


// console.log("hello titleBox");
// console.dir(titleBox);
