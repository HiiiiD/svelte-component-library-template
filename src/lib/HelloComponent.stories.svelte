<script>
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
    import HelloComponent from './HelloComponent.svelte';
</script>

<Meta
    title="Components/Hello"
    component={HelloComponent}
    argTypes={{
        name: { control: 'text' },
    }}
/>

<Template let:args>
    <HelloComponent {...args} />
</Template>

<Story name="Hello Component" args={{ name: 'Test' }} />
