import { Router } from 'express';
import {
    addElectionRoll,
    registerVoter,
    getRollsByElectionID,
    getByVoterID,
    editElectionRoll,
    approveElectionRoll,
    flagElectionRoll,
    invalidateElectionRoll,
    uninvalidateElectionRoll
} from '../Controllers/Roll';
import asyncHandler  from 'express-async-handler';
const rollRouter = Router();


/** 
 * @swagger
 * /Election/{id}/register:
 *   post:
 *     summary: Register a voter for an election
 *     tags: [Elections]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The election ID
 *     responses:
 *       200:
 *         description: Voter registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 election:
 *                   type: object
 *                   $ref: '#/components/schemas/Election'
 *                 NewElectionRoll:
 *                   type: object
 *                   $ref: '#/components/schemas/NewElectionRoll'
 *       404:
 *         description: Election not found
 */
rollRouter.post('/Election/:id/register',asyncHandler(registerVoter))

/** 
 * @swagger
 * /Election/{id}/rolls:
 *   get:
 *     summary: Get rolls by election ID
 *     tags: [Elections]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The election ID
 *     responses:
 *       200:
 *         description: List of rolls
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 electionRollEntry:
 *                   type: object
 *                   $ref: '#/components/schemas/ElectionRoll'
 *       404:
 *         description: Election not found 
*/
rollRouter.get('/Election/:id/rolls', asyncHandler(getRollsByElectionID))

/** 
 * @swagger
 * /Election/{id}/rolls/{voter_id}:
 *   get:
 *     summary: Get roll by voter ID
 *     tags: [Elections]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The election ID
 *       - in: path
 *         name: voter_id
 *         schema:
 *           type: string
 *         required: true
 *         description: The voter ID
 *     responses:
 *       200:
 *         description: Roll details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 electionRollEntry:
 *                   type: object
 *                   $ref: '#/components/schemas/ElectionRoll'
 *       404:
 *         description: Roll not found 
*/
rollRouter.get('/Election/:id/rolls/:voter_id', asyncHandler(getByVoterID))

/** 
 * @swagger
 * /Election/{id}/rolls:
 *   post:
 *     summary: Add a new roll to an election
 *     tags: [Elections]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The election ID
 *     responses:
 *       200:
 *         description: Roll added
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 election:
 *                   type: object
 *                   $ref: '#/components/schemas/Election'
 *                 NewElectionRoll:
 *                   type: object
 *                   $ref: '#/components/schemas/NewElectionRoll'
 *       404:
 *         description: Election not found
 */
rollRouter.post('/Election/:id/rolls/', asyncHandler(addElectionRoll))

/** 
 * @swagger
 * /Election/{id}/rolls:
 *   put:
 *     summary: Edit an election roll
 *     tags: [Elections]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The election ID
 *     responses:
 *       200:
 *         description: Roll edited
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 electionRollEntry:
 *                   type: object
 *                   $ref: '#/components/schemas/ElectionRoll'
 *       404:
 *         description: Election not found */
rollRouter.put('/Election/:id/rolls/', asyncHandler(editElectionRoll))

 /** 
 * @swagger
 * /Election/{id}/rolls/approve:
 *   post:
 *     summary: Approve an election roll
 *     tags: [Elections]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The election ID
 *     responses:
 *       200:
 *         description: Roll approved
 *       404:
 *         description: Election not found */
 rollRouter.post('/Election/:id/rolls/approve', asyncHandler(approveElectionRoll))

 /** 
 * @swagger
 * /Election/{id}/rolls/flag:
 *   post:
 *     summary: Flag an election roll
 *     tags: [Elections]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The election ID
 *     responses:
 *       200:
 *         description: Roll flagged
 *       404:
 *         description: Election not found */
 rollRouter.post('/Election/:id/rolls/flag', asyncHandler(flagElectionRoll))

 /** @swagger
 * /Election/{id}/rolls/invalidate:
 *   post:
 *     summary: Invalidate an election roll
 *     tags: [Elections]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The election ID
 *     responses:
 *       200:
 *         description: Roll invalidated
 *       404:
 *         description: Election not found */
 rollRouter.post('/Election/:id/rolls/invalidate', asyncHandler(invalidateElectionRoll))
/** 
 * 
 * @swagger
 * /Election/{id}/rolls/unflag:
 *   post:
 *     summary: Unflag an election roll
 *     tags: [Elections]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The election ID
 *     responses:
 *       200:
 *         description: Roll unflagged
 *       404:
 *         description: Election not found */
rollRouter.post('/Election/:id/rolls/unflag', asyncHandler(uninvalidateElectionRoll))

