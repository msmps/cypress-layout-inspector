import alignmentAssertions from "./alignment";
import boundaryAssertions from "./boundary";
import positionAssertions from "./position";
import styleAssertions from "./style";

chai.use(alignmentAssertions);
chai.use(boundaryAssertions);
chai.use(positionAssertions);
chai.use(styleAssertions);
