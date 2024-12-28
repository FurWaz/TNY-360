<template>
    <div class="h-fit min-h-full w-full">
        <div class="flex flex-col space-y-2 justify-evenly items-center w-full h-screen">
            <div class="w-fit h-fit space-y-4">
                <h1 class="hidden md:flex text-center text-4xl text-7xl font-main"> {{ $t('home.title') }} </h1>
                <h1 class="text-center text-7xl md:hidden font-main"> {{ $t('home.titlePhone') }} </h1>
                <p class="text-center text-lg md:text-xl"> {{ $t('home.subtitle') }} </p>
            </div>
            <div class="text-center h-1/4">
                <p class="text-2xl font-normal text-yellow-500"> Site en construction ! </p>
                <p class="text-lg"> C'est normal si vous ne trouvez pas ce que vous cherchez. </p>
            </div>
        </div>
        <div class="flex items-center w-full min-h-[75vh] h-fit md:h-[75vh] bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <div class="flex flex-col items-center w-full space-y-12 py-16">
                <h2 class="text-center text-yellow-500"> {{ $t('home.project.title') }} </h2>

                <div class="flex flex-col space-y-8 px-8 md:max-w-[40em]">
                    <div class="space-y-2">
                        <div class="flex space-x-2">
                            <div class="flex w-fit items-center"> <UIcon name="i-heroicons-cube" class="w-6 h-6" /> </div>
                            <h3>{{ $t('home.project.print.title') }}</h3>
                        </div>
                        <p class="pl-8">
                            {{ $t('home.project.print.description') }}
                        </p>
                    </div>
                    <div class="space-y-2">
                        <div class="flex space-x-2">
                            <div class="flex w-fit items-center"> <UIcon name="i-heroicons-wrench-screwdriver" class="w-6 h-6" /> </div>
                            <h3>{{ $t('home.project.hardware.title') }}</h3>
                        </div>
                        <p class="pl-8">
                            {{ $t('home.project.hardware.description') }}
                        </p>
                    </div>
                    <div class="space-y-2">
                        <div class="flex space-x-2">
                            <div class="flex w-fit items-center"> <UIcon name="i-heroicons-code-bracket" class="w-6 h-6" /> </div>
                            <h3>{{ $t('home.project.software.title') }}</h3>
                        </div>
                        <p class="pl-8">
                            {{ $t('home.project.software.description') }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="hidden lg:flex flex-col w-full h-full -skew-x-12 bg-yellow-500 translate-x-20">
                <div class="skew-x-12">
                    
                </div>
            </div>
        </div>
        <div class="flex flex-col py-16 min-h-[75vh] space-y-12">
            <h2 class="text-center text-yellow-500"> {{ $t('home.sensorsAndActuators') }} </h2>

            <div class="flex w-full h-fit">
                <div class="flex flex-col w-full items-end px-3 md:px-8 space-y-8">
                    <h3 class="mx-4 border-b-2 border-slate-700 dark:border-slate-50"> {{ $t('home.sensors.title') }} </h3>
                    <div v-for="sensor in sensors" :key="sensor.name" class="card p-2 md:p-4 w-full max-w-96 h-48 md:h-32">
                        <p class="text-xl font-normal">
                            <span class="text-yellow-500 font-semibold pr-1">x{{ sensor.number }}</span>
                            {{ $t(`home.sensors.${sensor.name}.title`) }}
                        </p>
                        <p> {{ $t(`home.sensors.${sensor.name}.description`) }} </p>
                    </div>
                </div>
                <span class="flex w-2 rounded-full bg-yellow-500" />
                <div class="flex flex-col w-full items-start px-3 md:px-8 space-y-8">
                    <h3 class="mx-4 border-b-2 border-slate-700 dark:border-slate-50"> {{ $t('home.actuators.title') }} </h3>
                    <div v-for="actuator in actuators" :key="actuator.name" class="card p-2 md:p-4 w-full max-w-96 h-48 md:h-32">
                        <p class="text-xl font-normal">
                            <span class="text-yellow-500 font-semibold pr-1">x{{ actuator.number }}</span>
                            {{ $t(`home.actuators.${actuator.name}.title`) }}
                        </p>
                        <p> {{ $t(`home.actuators.${actuator.name}.description`) }} </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col py-16 min-h-[75vh] space-y-12 bg-slate-200 dark:bg-slate-700">
            <h2 class="text-center text-yellow-500"> {{ $t('home.learn.title') }} </h2>

            <div class="flex grow w-full justify-start overflow-auto">
                <div class="flex px-2 mx-auto mb-2">
                    <div v-for="platform in platforms" :key="platform"
                        class="flex flex-col bg-slate-300 dark:bg-slate-800 rounded-lg p-4 text-center space-y-8 w-64 m-4 shadow-lg">
                        <h3>
                            {{ $t(`home.learn.${platform}.title`) }}
                        </h3>
                        <div>
                            <p> {{ $t(`home.learn.${platform}.description`) }} </p>
                        </div>
                        <div class="flex grow items-end justify-center pb-4">
                            <UButton to="/docs/" variant="solid" size="md">
                                {{ $t(`home.learn.${platform}.button`) }}
                            </UButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-16 min-h-[75vh] space-y-12">
            <h2 class="text-center text-yellow-500"> {{ $t('home.build.title') }} </h2>

            <div class="flex flex-wrap justify-evenly">
                <div class="card flex flex-col w-full md:w-1/4 m-4 p-4">
                    <h3> {{ $t('home.build.order.title') }} </h3>
                    <p class="flex grow"> {{ $t('home.build.order.description') }} </p>
                    <div class="flex w-full justify-start">
                        <UButton class="w-fit" to="/order" variant="solid" size="md" trailing icon="i-heroicons-chevron-right">
                            {{ $t('home.build.order.button') }}
                        </UButton>
                    </div>
                </div>
                <div class="card flex flex-col w-full md:w-1/4 m-4 p-4">
                    <h3> {{ $t('home.build.scratch.title') }} </h3>
                    <p class="flex grow"> {{ $t('home.build.scratch.description') }} </p>
                    <div class="flex w-full justify-start">
                        <UButton class="w-fit" to="/docs/" variant="solid" size="md" trailing icon="i-heroicons-chevron-right">
                            {{ $t('home.build.scratch.button') }}
                        </UButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
    title: `${t('home.title')} | ${t('home.subtitle')}`,
    description: t('home.description'),
    ogImage: 'https://tny360.projects.furwaz.com/icon.png',
    ogUrl: 'https://tny360.projects.furwaz.com',
    ogType: 'website',
    keywords: 'home, page, website, robot, furwaz',
});

const sensors = [
    { number: 1, name: 'camera' },
    { number: 1, name: 'microphone' },
    { number: 2, name: 'laser' },
    { number: 12, name: 'potentiometer' },
    { number: 1, name: 'mpu' },
    { number: 4, name: 'pressure' },
];
const actuators = [
    { number: 1, name: 'screen' },
    { number: 1, name: 'speaker' },
    { number: 60, name: 'leds' },
    { number: 12, name: 'motors' },
];

const platforms = [
    'mobile',
    'blocks',
    'python',
    'ros2',
    'esp32'
];

</script>
