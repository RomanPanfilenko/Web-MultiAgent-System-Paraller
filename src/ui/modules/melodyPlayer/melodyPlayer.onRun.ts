import $ from 'jquery';
import { parseMidi } from './utils/midiParser';
import { Melody } from '@/multiagent-system/modules/melody-player/models/melody';
import { MelodyPlayerProps } from './primitives/melodyPlayerProps';
import { Runner } from '@/multiagent-system/modules/common/runner/runner';
import { ProcessProps } from '../common/primitives/processProps';

export function onMelodyPlayerRun(runner: Runner<ProcessProps>, callback: any) {
    const ballTextureUrl = require('@/ui/asserts/img/ball.png').default;
    const filereader: any = document.querySelector('#filereader input');
    const file = filereader.files[0];
    parseMidi(file, async (melody: Melody) => {
        const unitNumber = Number($('#unit-count').val());
        const speed = Number($('#speed').val());
        const props: MelodyPlayerProps = {
            unitNumber: unitNumber,
            unitSpeed: speed,
            melody: melody,
            ballTexture: ballTextureUrl,
        };
        $('.settings ').hide();
        $('#view').show();
        const statistics = await runner.run(props);
        callback(statistics);
    });
}