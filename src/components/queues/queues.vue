<component class="component-queues padded">

    <h1 class="uc">{{$t('queue')}} {{$t('callgroups')}}</h1>

    <div class="queues-list item-list">

        <div class="loading-indicator" v-show="status === 'loading'">
            <div><icon class="spinner" name="spinner"/></div>
            <div class="text cf">{{$t('loading')}}<span>.</span><span>.</span><span>.</span></div>
        </div>

        <div class="no-results-indicator" v-if="!queues.length && status !== 'loading'">
            <div><icon name="queues"/></div>
            <div class="text cf">{{$t('no {target}', {target: `${$t('queue')} ${$t('callgroups')}`})}}...</div>
        </div>

        <div v-else class="queue item" :class="{selected: selected.id == queue.id}" v-for="queue in queues">
            <div class="status-icon">
                <i class="indicator" :class="classesQueue(queue)">{{queue.queue_size}}</i>
            </div>
            <div class="info">
                <div class="name">{{queue.description}}</div>
                <div class="description">{{queue.internal_number}}</div>
            </div>

            <div class="item-options">
                <button class="item-option green" v-show="transferStatus === 'select'" :disabled="!isTransferTarget(null, queue.internal_number)" v-on:click.once="createCall(queue.internal_number)">
                    <icon name="transfer"/>
                </button>
                <button class="item-option green" v-show="!transferStatus" :disabled="callingDisabled || !callsReady" v-on:click="createCall(queue.internal_number)">
                    <icon name="phone-circle"/>
                </button>
                <button class="item-option grey" :class="{active: selected.id === queue.id}" v-on:click="toggleActiveQueue(queue)">
                    <icon name="eye"/>
                </button>
            </div>
        </div>
    </div>

    <!-- Fill up some space by suggesting to add another queue -->
    <div class="notification-box info" v-if="queues.length <= 1 && status !== 'loading'">
        <header>
            <icon name="info"/>
            <span class="cf">{{$t('adding more queue callgroups')}}</span>
        </header>
        <ul>
            <li>{{$t('head over to')}} <a class="cf" @click="openPlatformUrl('callgroup')">{{$t('callgroups')}}</a> {{$t('to manage your {target}', {target: $t('callgroups')})}}.</li>
            <li>{{$t('head over to')}} <a class="cf" @click="openPlatformUrl('callgroup')">{{$t('queues')}}</a> {{$t('to manage your {target}', {target: $t('queues')})}}.</li>
            <li>{{$t('head over to')}} <a class="cf" @click="openPlatformUrl('routing')">{{$t('dialplans')}}</a> {{$t('to add the {source} to a {target}', {source: $t('queue'), target: $t('dialplan')})}}.</li>
        </ul>
    </div>

</component>
