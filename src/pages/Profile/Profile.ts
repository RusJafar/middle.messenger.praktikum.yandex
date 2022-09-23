import BlockComponent from '../../utils/BlockComponent';
import {ProfileProps} from "./ProfileTypes";
import ProfileTemplate from './Profile.tmpl'
import ProfileBlock from "../../blocks/ProfileBlock/ProfileBlock";


export default class Profile extends BlockComponent<ProfileProps> {
    constructor(props: ProfileProps) {
        super('div', props);
    }

    init() {
        this.children.profileBlock = new ProfileBlock(this.props);
    }

    render() {
        return this.compile(ProfileTemplate, {});
    }
}