import AppExtensionsSDK, { Command, Modal } from "@pipedrive/app-extensions-sdk";


export default function Home() {
    const t = async () => {
        try {
            const sdk = await new  AppExtensionsSDK().initialize();
            // Get the access token
            const { status } = sdk.execute(Command.OPEN_MODAL, {
                type: Modal.JSON_MODAL,
                action_id: 'Open settings',
            });
            console.log(status)
    
            //res.status(200).json('Successfully authorized');
        } catch (error) {
            //res.status(500).json(error);
        }
    }
    t()

    return (
        <div>home</div>
    );
}