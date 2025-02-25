const SoundGroups = {
    ljSpeech: {
        title: 'LJSpeech',
        samples: [
            {
                code: 'LJ001-0001',
                text: 'Printing, in the only sense with which we are at present concerned, differs from most if not from all the arts and crafts represented in the Exhibition',
            },

            {
                code: 'LJ001-0012',
                text: 'Especially as no more time is occupied, or cost incurred, in casting, setting, or printing beautiful letters',
            },

            {
                code: 'LJ003-0024',
                text: 'He collected the garnish money, and distributed the weekly grant from the prison charitable fund',
            },

            {
                code: 'LJ010-0085',
                text: 'It was the day on which Lord Harrowby was to entertain his colleagues at dinner in Grosvenor Square',
            },

            {
                code: 'LJ025-0141',
                text: 'The diameter of which dwindles down to the limits of our present microscopic vision',
            },

            {
                code: 'LJ032-0196',
                text: 'This adds to the conviction of the Commission that Oswald owned and handled the weapon used in the assassination',
            },



        ]
    },

    baker: {
        title: 'Baker',
        samples: [
            {
                code: '003095',
                text: '失恋的人特别喜欢往人烟罕至的角落里钻',
            },

            {
                code: '004539',
                text: '网友“甄巍峰”说，希望规范用工制度和用工秩序',
            },

            {
                code: '005045',
                text: '如果罪名成立，他们将被处以死刑，但预计案件审理过程冗长',
            },

            {
                code: '005064',
                text: '在把老张暴打一顿后，三人还不解恨，又踹了老张的车几脚',
            },

            {
                code: '005134',
                text: '我的性格也是逆来顺受，从小胆小怕事，凡事都忍让',
            },

            {
                code: '008313',
                text: '一名警员在抓捕过程中，左侧肘关节中弹受伤',
            },





        ]
    },

    esd: {
      Mandarin: {
          text: '打远一看，它们的确很是美丽',
          // gt: ['GT_Neutral',	'GT_Angry',	'GT_Happy',	'GT_Sad',	'GT_Surprise'],
          // tts: ['Clip-TTS_Neutral',	'Clip-TTS_Angry',	'Clip-TTS_Happy',	'Clip-TTS_Sad',	'Clip-TTS_Surprise'],
      },
      English: {
          text: 'That I owe my thanks to you',
          // gt: ['GT_Neutral',	'GT_Angry',	'GT_Happy',	'GT_Sad',	'GT_Surprise'],
          // tts: ['Clip-TTS_Neutral',	'Clip-TTS_Angry',	'Clip-TTS_Happy',	'Clip-TTS_Sad',	'Clip-TTS_Surprise'],
      },

    },

    others: {
        samples: [
            {
                text: '悯农：锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦',
                soundFile: 'media/sound/demo/baker/悯农.wav',
            },
            {
                text: '三字经：人之初，性本善，性相近，习相远',
                soundFile: 'media/sound/demo/baker/三字经.wav',
            },
            {
                text: '望庐山瀑布：日照香炉生紫烟，遥看瀑布挂前川，飞流直下三千尺，疑是银河落九天',
                soundFile: 'media/sound/demo/baker/望庐山瀑布.wav',
            },
            {
                text: '水手：星星点灯，照亮我的家门',
                soundFile: 'media/sound/demo/baker/水手.wav',
            },

            {
                text: 'Holy Bible_GENESIS-17-27: And all the men of his house, born in the house and bought with money from a foreigner, were circumcised with him',
                soundFile: 'media/sound/demo/LJSpeech/Holy_Bible_GENESIS-17-27.wav',
            },

             {
                text: 'Holy Bible_GENESIS-19-6: Solot went out to them through the doorway, shut the door behind him',
                 soundFile: 'media/sound/demo/LJSpeech/Holy_Bible_GENESIS-19-6.wav',
            },

             {
                text: 'Holy Bible_JOB-7-3: So I have been a lot of months of futility, and wearisome nights have been appointed to me',
                 soundFile: 'media/sound/demo/LJSpeech/Holy_Bible_JOB-7-3.wav',
            },

             {
                text: 'Holy Bible_NUMBERS-22-24: Then the angel of the Lord stood in an arrow path between the vineyards, with a wall on this side and a wall on that side',
                 soundFile: 'media/sound/demo/LJSpeech/Holy_Bible_NUMBERS-22-24.wav',
            },





        ]
    }


};




function listSoundSamples() {

    // add ljSpeech samples
    SoundGroups.ljSpeech.samples.map(item => {
        let ljsDom = `
        <div  style="padding-top: 1rem;">${item.code}: ${item.text}:</div>  
        <div class="st-wrap">
            <table>
                <thead> <tr>
                            <th style="text-align: center">GT</th>
                            <th style="text-align: center">GT(HiFi-GAN)</th>
                            <th style="text-align: center">Clip-TTS</th>
                        </tr>
                </thead>
                <tbody> <tr>
                            <td style="text-align: center"><audio controls="controls" ><source src="media/sound/GT/LJSpeech/${item.code}.wav"  /></audio></td>
                            <td style="text-align: center"><audio controls="controls" ><source src="media/sound/GT-HiFi-GAN/LJSpeech/${item.code}.wav"  /></audio></td>
                            <td style="text-align: center"><audio controls="controls" ><source src="media/sound/demo/LJSpeech/${item.code}.wav"  /></audio></td>
                        </tr>
                </tbody>
            </table>
        </div>
        
        `;
        $('#LJSpeechSamples').append(ljsDom);

    });
}

function listBakerSamples() {

    // add ljSpeech samples
    SoundGroups.baker.samples.map(item => {
        let bakerDom = `
        <div  style="padding-top: 1rem;">${item.code}: ${item.text}:</div>  
        <div class="st-wrap">
            <table>
                <thead> <tr>
                            <th style="text-align: center">GT</th>
                            <th style="text-align: center">GT(HiFi-GAN)</th>
                            <th style="text-align: center">Clip-TTS</th>
                        </tr>
                </thead>
                <tbody> <tr>
                            <td style="text-align: center"><audio controls="controls" ><source src="media/sound/GT/baker/${item.code}.wav"  /></audio></td>
                            <td style="text-align: center"><audio controls="controls" ><source src="media/sound/GT-HiFi-GAN/baker/${item.code}.wav"  /></audio></td>
                            <td style="text-align: center"><audio controls="controls" ><source src="media/sound/demo/baker/${item.code}.wav"  /></audio></td>
                        </tr>
                </tbody>
            </table>
        </div>
        
        `;
        $('#bakerSamples').append(bakerDom);

    });
}

function listEsdSamples() {

    // 使用jQuery遍历对象
    $.each(SoundGroups.esd, (langName, langItem) => {
        // console.log(key + ": " + value);

        let esdDom = `
        <div  style="padding-top: 1rem;">${langName}: ${langItem.text}:</div>  
        <div class="st-wrap esd-width-wrap">
            <table>
                <thead> <tr>
                            <th style="text-align: center">GT_Neutral</th>
                            <th style="text-align: center">GT_Angry</th>
                            <th style="text-align: center">GT_Happy</th>
                            <th style="text-align: center">GT_Sad</th>
                            <th style="text-align: center">GT_Surprise</th>
                        </tr>
                </thead>
                <tbody> <tr>
                            <td style="text-align: center"><audio controls="controls" ><source src="media/sound/GT/ESD/${langName}/GT_Neutral.wav"  /></audio></td>
                            <td style="text-align: center"><audio controls="controls" ><source src="media/sound/GT/ESD/${langName}/GT_Angry.wav"  /></audio></td>
                            <td style="text-align: center"><audio controls="controls" ><source src="media/sound/GT/ESD/${langName}/GT_Happy.wav"  /></audio></td>
                            <td style="text-align: center"><audio controls="controls" ><source src="media/sound/GT/ESD/${langName}/GT_Sad.wav"  /></audio></td>
                            <td style="text-align: center"><audio controls="controls" ><source src="media/sound/GT/ESD/${langName}/GT_Surprise.wav"  /></audio></td>
                        </tr>
                </tbody>
            </table>
            
             <table>
                <thead> <tr>
                            <th style="text-align: center">Clip-TTS_Neutral</th>
                            <th style="text-align: center">Clip-TTS_Angry</th>
                            <th style="text-align: center">Clip-TTS_Happy</th>
                            <th style="text-align: center">Clip-TTS_Sad</th>
                            <th style="text-align: center">Clip-TTS_Surprise</th>
                        </tr>
                </thead>
                <tbody> <tr>
                            <td style="text-align: center"><audio controls="controls" ><source src="media/sound/demo/ESD/${langName}/Clip-TTS_Neutral.wav"  /></audio></td>
                            <td style="text-align: center"><audio controls="controls" ><source src="media/sound/demo/ESD/${langName}/Clip-TTS_Angry.wav"  /></audio></td>
                            <td style="text-align: center"><audio controls="controls" ><source src="media/sound/demo/ESD/${langName}/Clip-TTS_Happy.wav"  /></audio></td>
                            <td style="text-align: center"><audio controls="controls" ><source src="media/sound/demo/ESD/${langName}/Clip-TTS_Sad.wav"  /></audio></td>
                            <td style="text-align: center"><audio controls="controls" ><source src="media/sound/demo/ESD/${langName}/Clip-TTS_Surprise.wav"  /></audio></td>
                        </tr>
                </tbody>
            </table>
            
            
            
        </div>
        
        `;
        $('#esdSamples').append(esdDom);

    });
}


function listOthersSamples() {

    SoundGroups.others.samples.map(item => {
        let othersDom = `
        <div   > ${item.text}:</div>  
        <div class="st-wrap">
            <audio controls="controls" ><source src="${item.soundFile}"  /></audio>
        </div>
        `;
        $('#othersSamples').append(othersDom);

    });
}


$(document).ready(() => {
    listSoundSamples();
    listBakerSamples();
    listEsdSamples();
    listOthersSamples();
});