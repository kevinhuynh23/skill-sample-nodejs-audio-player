'use strict';

import { Request, IntentRequest, LaunchRequest } from 'ask-sdk-model';
let en = {
    card: {
        title: 'Work Neighborhood',
        text: 'Less distractions, more productivity',
        image: {
            largeImageUrl: 'https://alexademo.ninja/skills/logo-512.png',
            smallImageUrl: 'https://alexademo.ninja/skills/logo-108.png'
        }
    },
    url: 'https://www.jovo.tech/audio/Judzv0B6-launch-countdown.mp3',
    startJingle: ''
};

let fr = {
    card: {
        title: 'Work Neighborhood',
        text: 'Moins de distractions, plus de productivity',
        image: {
            image: {
                largeImageUrl: 'https://alexademo.ninja/skills/logo-512.png',
                smallImageUrl: 'https://alexademo.ninja/skills/logo-108.png'
            }
    
        }
    },
    url: 'https://project-neighbor.s3.amazonaws.com/audio_track/Launch_Countdown.mp3',
    startJingle: ''
};

let it = {
    card: {
        title: 'La Mia Radio',
        text: 'Meno parlare, più musica',
        image: {
            image: {
                largeImageUrl: 'https://alexademo.ninja/skills/logo-512.png',
                smallImageUrl: 'https://alexademo.ninja/skills/logo-108.png'
            }
    
        }
    },
    url: 'https://project-neighbor.s3.amazonaws.com/audio_track/Launch_Countdown.mp3',
    startJingle: ''
};

let es = {
    card: {
        title: 'Mi Radio',
        text: 'Menos conversación, más música',
        image: {
            image: {
                largeImageUrl: 'https://alexademo.ninja/skills/logo-512.png',
                smallImageUrl: 'https://alexademo.ninja/skills/logo-108.png'
            }
    
        }
    },
    url: 'https://project-neighbor.s3.amazonaws.com/audio_track/Launch_Countdown.mp3',
    startJingle: ''
};

let globalAudioData = {
        'en-US': en,
        'en-GB': en,
        'en-CA': en,
        'en-IN': en,
        'en-AU': en,
        'fr-FR': fr,
        'fr-CA': fr,
        'it-IT': it,
        'es-ES': es,
        'es-MX': es
};

export function audioData(request : Request) {
    let DEFAULT_LOCALE = 'en-US';
    var locale = (<IntentRequest | LaunchRequest>request).locale;
    if (locale === undefined) { 
        locale = DEFAULT_LOCALE
    };
    return globalAudioData[locale];    
}

