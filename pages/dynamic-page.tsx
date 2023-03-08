import iconAction from "@ui5/webcomponents-icons/dist/action.js";
import iconDecline from "@ui5/webcomponents-icons/dist/decline.js";
import iconExitFullScreen from "@ui5/webcomponents-icons/dist/exit-full-screen.js";
import iconFullScreen from "@ui5/webcomponents-icons/dist/full-screen.js";
import {
    Badge,
    Breadcrumbs,
    BreadcrumbsItem,
    Button,
    CheckBox,
    DynamicPage,
    DynamicPageHeader,
    DynamicPageTitle,
    FlexBox,
    Form,
    FormGroup,
    FormItem,
    Input,
    InputType,
    Label,
    Link,
    ObjectStatus,
    Option,
    Select,
    Text,
    TextArea,
    Title,
} from "@ui5/webcomponents-react/ssr";
import { CSSProperties } from "react";

export default function DynamicPageTest() {
    return (
        <DynamicPage
            headerContent={
                <DynamicPageHeader>
                    <FlexBox wrap="Wrap">
                        <FlexBox direction="Column">
                            <Label>Location: Warehouse A</Label>
                            <Label>Halway: 23L</Label>
                            <Label>Rack: 34</Label>
                        </FlexBox>
                        <span style={{ width: "1rem" }}/>
                        <FlexBox direction="Column">
                            <Label>Availability:</Label>
                            <ObjectStatus state="Success">In Stock</ObjectStatus>
                        </FlexBox>
                    </FlexBox>
                </DynamicPageHeader>
            }
            headerTitle={
                <DynamicPageTitle
                    actions={
                        <>
                            <Button design="Emphasized">Edit</Button>
                            <Button design="Transparent">Delete</Button>
                            <Button design="Transparent">Copy</Button>
                            <Button design="Transparent" icon={iconAction}/>
                        </>
                    }
                    // breadcrumbs={
                    //     <Breadcrumbs>
                    //         <BreadcrumbsItem>Home</BreadcrumbsItem>
                    //         <BreadcrumbsItem>Page 1</BreadcrumbsItem>
                    //         <BreadcrumbsItem>Page 2</BreadcrumbsItem>
                    //         <BreadcrumbsItem>Page 3</BreadcrumbsItem>
                    //         <BreadcrumbsItem>Page 4</BreadcrumbsItem>
                    //         <BreadcrumbsItem>Page 5</BreadcrumbsItem>
                    //     </Breadcrumbs>
                    // }
                    header={<Title>Header Title</Title>}
                    navigationActions={
                        <>
                            <Button design="Transparent" icon={iconFullScreen}/>
                            <Button design="Transparent" icon={iconExitFullScreen}/>
                            <Button design="Transparent" icon={iconDecline}/>
                        </>
                    }
                    subHeader={<Label>This is a sub header</Label>}
                >
                    <Badge>Status: OK</Badge>
                </DynamicPageTitle>
            }
            style={{
                maxHeight: "700px",
            }}
        >
            <Form>
                <FormGroup titleText="Personal Data">
                    <FormItem label="Name">
                        <Input type={InputType.Text}/>
                    </FormItem>
                    <FormItem label={<Label>Address</Label>}>
                        <Input type={InputType.Text}/>
                    </FormItem>
                    <FormItem label="Country">
                        <Select>
                            <Option>Germany</Option>
                            <Option>France</Option>
                            <Option>Italy</Option>
                        </Select>
                    </FormItem>
                    <FormItem
                        label={
                            <Label style={{ alignSelf: "start", paddingTop: "0.25rem" }}>
                                Additional Comment
                            </Label>
                        }
                    >
                        <TextArea
                            rows={5}
                            style={{ width: "210px", "--_ui5_textarea_margin": 0 } as CSSProperties}
                            placeholder="The styles of the Label of the TextArea FormItem is set to: alignSelf: 'start', paddingTop: '0.25rem'"
                        />
                    </FormItem>
                    <FormItem label="Home address">
                        <CheckBox checked/>
                    </FormItem>
                </FormGroup>
                <FormGroup titleText="Company Data">
                    <FormItem label={"Company Name"}>
                        <Input type={InputType.Text}/>
                    </FormItem>
                    <FormItem label="Company Address">
                        <Input type={InputType.Text}/>
                    </FormItem>
                    <FormItem label="Company City">
                        <Input type={InputType.Text}/>
                    </FormItem>
                    <FormItem label="Company Country">
                        <Input type={InputType.Text}/>
                    </FormItem>
                    <FormItem label="Number of Employees">
                        <Input type={InputType.Number} value="5000" disabled/>
                    </FormItem>
                    <FormItem label="Member of Partner Network">
                        <CheckBox checked/>
                    </FormItem>
                </FormGroup>
                <FormGroup titleText="Marketing Data">
                    <FormItem label="Email">
                        <Input type={InputType.Email}/>
                    </FormItem>
                    <FormItem label="Company Email">
                        <Input type={InputType.Email}/>
                    </FormItem>
                    <FormItem label="I want to receive the newsletter">
                        <CheckBox/>
                    </FormItem>
                </FormGroup>
                <FormGroup titleText="Contact">
                    <FormItem label="Website">
                        <Link href={"https://sap.github.io/ui5-webcomponents-react"}>
                            https://sap.github.io/ui5-webcomponents-react
                        </Link>
                    </FormItem>
                    <FormItem label="Email">
                        <Link>some.one@sap.com</Link>
                    </FormItem>
                    <FormItem label="Slack">
                        <Link href={"https://openui5.slack.com/archives/CSQEJ2J04"}>
                            #webcomponents-react
                        </Link>
                    </FormItem>
                    <FormItem label="Company">
                        <Text>SAP</Text>
                    </FormItem>
                    <FormItem label="Company Headquarter">
                        <Text>Walldorf, Germany</Text>
                    </FormItem>
                </FormGroup>
            </Form>
        </DynamicPage>
    );
}
