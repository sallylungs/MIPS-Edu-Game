
/**
 * This class create Instrucion Menu whcih should contain all Instructions that we will 
 * teach people. When people press these instructions long enough, it supposes to give
 * them the hint that what the instruction is and how to use them.
 *
 * @class InstructionMenu
 * @extends {GameScene}
 */
class InstructionMenu extends GameScene{
    
    /**
     *Creates an instance of InstructionMenu.
     * @memberof InstructionMenu
     */
    constructor() {
        super();
        this.init();
    }

    /**
     * This function initialized Instruction Menu. All components of instruction menu should
     * me delceared, and added to, here. 
     *
     * @memberof InstructionMenu
     */
    init(){
        console.log("Instruction Menu Initialized");
        var addInstruction = Button.getButton('Add_Ins',50,30,1,3,'Add');
        var AddHint= new HintEvent('IMHint');
        AddHint.setHintContent('Adds two registers and stores the result in a register \nadd $d, $s, $t');
        addInstruction.addLongPressEvent(AddHint);
        addInstruction.addClickEvent(AddHint);
        this.addComponent(addInstruction,-1);

        // Sally Leung (lungz on slack):
        // a bug fix -- add a button to go back, but this creates a new game... not sure how to go back to original mainscene
        var goBack = Button.getButton('gobacktogame', 50, 60, 1, 3, 'Back');
        goBack.addClickEvent(new NewSceneEvent(new MainScene()), new LongPressEvent());
        this.addComponent(goBack, -1);

    }
}
